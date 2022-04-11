import { Component, OnInit } from '@angular/core';
import {UserDto} from "../shared/dto/UserDto";
import {AdminService} from "./admin.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  page: number = 0;
  pageSize: number = 10;
  users: UserDto[] = [];
  selectedUser: any = {};
  xAuthToken: string | null = '';
  totalRecords: number = 0;

  constructor(
    private adminService: AdminService,
    private toastr: MessageService
  ) { }

  ngOnInit(): void {
    this.xAuthToken = localStorage.getItem('registerToken');
    if(this.xAuthToken) {
      this.adminService.getAllUsers(this.xAuthToken, this.page,this.pageSize).subscribe(data => {
        if(data.success) {
          this.users = data.data.docs;
          this.page = data.data.page;
          this.totalRecords = data.data.totalDocs;
          console.log('kit ', this.totalRecords)
        } else {
          this.toastr.add({severity: 'error', summary: 'Error', detail: JSON.stringify(data.errors[0].message)})
        }
      })
    } else {
      this.toastr.add({severity: 'error', summary: 'Error', detail: 'Access denied'})
    }
  }

  loadData() {
    this.page = this.page + 1;
    if (this.xAuthToken != null) {
      this.adminService.getAllUsers(this.xAuthToken, this.page, this.pageSize).subscribe(data => {
        this.users = data.data.docs;
        this.page = data.data.page;
      })
    }
  }
}

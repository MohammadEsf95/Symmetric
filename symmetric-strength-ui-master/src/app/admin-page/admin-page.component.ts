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
      this.adminService.getAllUsers(this.xAuthToken, 1,5).subscribe(data => {
        if(data.success) {
          this.users = data.data.docs;
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

}

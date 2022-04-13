import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserDto} from "../shared/dto/UserDto";
import {AdminService} from "./admin.service";
import {MessageService} from "primeng/api";
import { AuthService } from '../shared/auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  page: number = 1;
  pageSize: number = 10;
  users: UserDto[] = [];
  xAuthToken: string | null = '';
  totalRecords: number = 0;
  totalPages: number = 0;
  hasNextPage: boolean = false;
  userId: string = '';

  constructor(
    private adminService: AdminService,
    private toastr: MessageService,
    private authService: AuthService,
    private route: Router,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.xAuthToken = localStorage.getItem('registerToken');
    if(this.xAuthToken) {
      this.adminService.getAllUsers(this.xAuthToken, this.page,this.pageSize).subscribe(data => {
        if(data.success) {
          this.users = data.data.docs;
          this.page = data.data.page;
          this.hasNextPage = data.data.hasNextPage;
          this.totalPages = data.data.totalPages;
          this.totalRecords = data.data.totalDocs;
          this.changeDetector.detectChanges();
        } else {
          this.toastr.add({severity: 'error', summary: 'Error', detail: JSON.stringify(data.errors[0].message)})
        }
      })
    } else {
      this.toastr.add({severity: 'error', summary: 'Error', detail: 'Access denied'})
    }
  }

  loadData(event: any) {
    if (this.hasNextPage) {
      this.page = event.page + 1;
      if (this.xAuthToken != null) {
        this.adminService.getAllUsers(this.xAuthToken, this.page, this.pageSize).subscribe(data => {
          this.users = data.data.docs;
          this.page = data.data.page;
        })
      }
    } else {
      this.page = 1;
      if (this.xAuthToken != null) {
        this.adminService.getAllUsers(this.xAuthToken, this.page, this.pageSize).subscribe(data => {
          this.users = data.data.docs;
          this.page = data.data.page;
        })
      }
    }
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/'])
  }

  goToUserInfo(event: any) {
    this.userId = event;
    console.log(event)
    if (this.xAuthToken != null) {
      this.adminService.getUserInfo(this.xAuthToken, 0, 5, this.userId).subscribe(data => {
        console.log(data)
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth/auth.service";
import {UserDto} from "../../shared/dto/UserDto";
import {Router} from "@angular/router";
import {ChangeSettingDto} from "../shared/ChangeSettingDto";
import {ChangeSettingService} from "../shared/change-setting.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  userDto: UserDto = {};
  xAuthToken: string | null = '';
  changeSettingDto: ChangeSettingDto = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private changeSettingService: ChangeSettingService,
    private toastr: MessageService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('registerToken')) {
      this.xAuthToken = localStorage.getItem('registerToken');
      if (this.xAuthToken != null) {
        this.authService.getUser(this.xAuthToken).subscribe(data => {
          if(data.success) {
            this.userDto = data.data.user;
          } else {
            this.router.navigate(['/'])
          }
        })
      }
    }
  }

  submit() {
    this.changeSettingDto.public_page = this.userDto.public_page;
    if(this.changeSettingDto.public_page == false) {
      this.changeSettingDto.hide_weight = false;
    } else {
      this.changeSettingDto.hide_weight = true;
    }

    if (this.xAuthToken != null) {
      this.changeSettingService.changeSetting(this.changeSettingDto, this.xAuthToken).subscribe(data => {
        if(data.success) {
          this.toastr.add({severity:'success', summary:'Successful', detail:'Setting changed successfully!'});
        } else {
          this.toastr.add({severity:'error', summary:'Error', detail: JSON.stringify(data.errors[0].message)})
        }
      })
    }
  }

  deleteAccount() {
    if (this.xAuthToken != null) {
      this.changeSettingService.deleteAccount(this.xAuthToken).subscribe(data => {
        if(data.success) {
          this.authService.logout();
          this.toastr.add({severity:'success', summary:'Successful', detail:'Account deleted successfully!'});
          this.router.navigate(['/'])
        } else {
          this.toastr.add({severity:'error', summary:'Error', detail: JSON.stringify(data.errors[0].message)})
        }
      })
    }
  }
}

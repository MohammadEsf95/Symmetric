import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth/auth.service";
import {MessageService} from "primeng/api";
import {CompleteProfileDto} from "../../shared/dto/CompleteProfileDto";

@Component({
  selector: 'app-set-username',
  templateUrl: './set-username.component.html',
  styleUrls: ['./set-username.component.css']
})
export class SetUsernameComponent implements OnInit {

  username: string = '';
  publicPageUrl: string = 'https://symmetricstrength.com/lifter/';
  completeProfileDto: CompleteProfileDto = {};
  xAuthToken: string | null = '';

  constructor(
    private authService: AuthService,
    private toastr: MessageService
  ) { }

  ngOnInit(): void {
      this.xAuthToken = localStorage.getItem('registerToken');
  }

  typeUserName() {
    this.publicPageUrl = this.publicPageUrl + this.username;
  }

  submit() {
    if(this.xAuthToken) {
      this.completeProfileDto.username = this.username;
      this.authService.completeProfile(this.completeProfileDto, this.xAuthToken).subscribe(data => {
        if(data.success) {

        } else {
          this.toastr.add({severity:'error', summary:'Error', detail: JSON.stringify(data.errors[0].message)})
        }
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth/auth.service";
import {MessageService} from "primeng/api";
import {CompleteProfileDto} from "../../shared/dto/CompleteProfileDto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-set-username',
  templateUrl: './set-username.component.html',
  styleUrls: ['./set-username.component.css']
})
export class SetUsernameComponent implements OnInit {

  //TODO condition checks in order to redirect to this component
  username: string = '';
  publicPageUrl: string = 'https://symmetricstrength.com/lifter/';
  completeProfileDto: CompleteProfileDto = {};
  xAuthToken: string | null = '';

  constructor(
    private authService: AuthService,
    private toastr: MessageService,
    private router: Router
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
      console.log(this.completeProfileDto)
      console.log(this.xAuthToken)
      this.authService.completeProfile(this.completeProfileDto, this.xAuthToken).subscribe(data => {
        if(data.success) {
          this.toastr.add({severity:'success', summary:'Successful', detail:'Profile updated!'});
          this.router.navigate(['/'])
        } else {
          this.toastr.add({severity:'error', summary:'Error', detail: JSON.stringify(data.errors[0].message)})
        }
      })
    }
  }
}

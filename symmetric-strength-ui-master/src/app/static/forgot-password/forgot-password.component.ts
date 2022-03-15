import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth/auth.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: any;
  successful : boolean = false;

  constructor(
    private authService: AuthService,
    private toastr: MessageService
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.forgotPassword(this.email).subscribe(data => {
      console.log(data)
      if(data.success == true) {
        this.successful = true;
      } else {
        this.toastr.add({severity: 'error', summary: 'Error', detail: 'Something went wrong!'})
      }
    })
  }
}

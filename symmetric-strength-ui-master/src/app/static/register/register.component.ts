import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/auth/auth.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "angularx-social-login";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string | undefined;
  checked: boolean = false;
  emailSent: boolean = false;
  registrationForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private toastr: MessageService,
    private router: Router
  ) {
    this.registrationForm = this.builder.group({
      email: new FormControl(1, Validators.email),
      checked: new FormControl(1, Validators.requiredTrue)
    })
  }

  ngOnInit(): void {
  }

  register() {
    if (this.checked && this.email) {
      this.authService.signUp(this.email).subscribe(data => {
        if(data.success == true) {
          this.emailSent = true;

          this.toastr.add({severity:'success', summary:'Successfully', detail:'Successfully submitted, go to your mailbox'})
        } else {
          this.toastr.add({severity:'error', summary:'Error', detail: JSON.stringify(data.errors[0].message)})
        }
      })
    }
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  loginWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}

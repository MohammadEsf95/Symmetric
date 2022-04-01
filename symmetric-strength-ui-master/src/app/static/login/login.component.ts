import {Component, OnInit} from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/auth/auth.service";
import {SignInDto} from "../../shared/dto/SignInDto";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;
  loading = [false, false, false, false]
  loginForm: FormGroup | undefined;
  socialUser: SocialUser | undefined;
  isLoggedin: boolean = false;
  signInDto: SignInDto = {};

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private toastr: MessageService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }

  login(index: any) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
    this.authService.signIn(this.signInDto).subscribe((data) =>
    {
      if(data.success == true) {
      this.socialUser = data;
      localStorage.setItem('registerToken', data.data.token)
      this.toastr.add({severity:'success', summary:'Successfully', detail:'Successfully logged in!'});
      this.router.navigate(['/'])
    } else {
      this.toastr.add({severity:'error', summary:'Error', detail: JSON.stringify(data.errors[0].message)})
    }
    })
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

  loginWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  navigateToForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }

  navigateToRegister() {
    this.router.navigate(['/auth/register']);
  }
}

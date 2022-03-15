import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SetPasswordDto} from "../../shared/dto/SetPasswordDto";
import {AuthService} from "../../shared/auth/auth.service";

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  subs = new Subscription();
  setPasswordDto: SetPasswordDto = {};
  token: string = '';
  password: string = '';
  rePassword: string = '';
  resetPasswordForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private toastr: MessageService,
    private authService: AuthService
  ) {
    this.resetPasswordForm = builder.group({
      password : new FormControl(1, Validators.required),
      rePassword : new FormControl(1, Validators.required)
    }
  )
  }

  ngOnInit(): void {
    this.subs.add(
      this.route.queryParams.subscribe(params => {
        this.token = params['token']
        if (this.token) {
          this.setPasswordDto.token = this.token;
          this.toastr.add({severity:'success',summary:'Welcome!', detail:'One step to complete registration!'})
        } else {
          this.toastr.add({severity:'error',summary:'Unauthorized', detail:''})
          this.router.navigate(['/home'])
        }
      })
    )
  }

  matchValidator(group: FormGroup) {
    const password = group.get('password')!.value;
    const confirmPassword = group.get('rePassword')!.value;

    return password === confirmPassword
  }

  //http://173.255.219.172/verify-email/92b2d7729d0367d54f7e6b11a2efab80

  submit() {
    if(this.matchValidator(this.resetPasswordForm)) {
      console.log(this.setPasswordDto)
      this.authService.setPassword(this.setPasswordDto).subscribe(data => {
        if(data.success == true) {
          // this.emailSent = true;
          this.toastr.add({severity:'success', summary:'Successfully', detail:'Successfully registered!'})
        } else {
          this.toastr.add({severity:'error', summary:'Error', detail: JSON.stringify(data.errors[0].message)})
        }
      })
    } else {
      this.toastr.add({severity:'error', summary:'Error', detail: 'Password and repeated password doesnt match!'})
    }
  }
}

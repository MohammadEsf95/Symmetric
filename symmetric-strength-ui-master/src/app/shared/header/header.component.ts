import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {UserDto} from "../dto/UserDto";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  isLoggedIn: boolean = false;
  homePageTitle: string = 'Analyze Your Strength';
  strengthStandardsTitle: string = 'Strength Standards';
  about: string = 'About Symmetric Strength';
  oneRmCalc: string = '1RM Calculator'
  wilksCalc: string = 'Wilks Calculator'
  tdeeCalc: string = 'TDEE Calculator'
  idealBodyweightCalc: string = 'Ideal Bodyweight Calculator'
  xAuthToken: string | null = '';
  userDto: UserDto = {};
  lifterUsername: string | null = '';

  constructor(
    public router: Router,
    public authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.items = [{
      label: 'Home',
      routerLink: '/'
      // items: [{
      //   label: 'New',
      //   icon: 'pi pi-fw pi-plus',
      //   items: [
      //     {label: 'Project'},
      //     {label: 'Other'},
      //   ]
      // },
      //   {label: 'Open'},
      //   {label: 'Quit'}
      // ]
    },
      {
        label: 'Strength Standards',
        routerLink: '/strength-standards'
      },
      {
        label: 'Calculators',
        items: [
          {
            label: '1RM Calculator',
            routerLink: '/calculator/one_rep_max'
          },
          {
            label: 'Wilks Calculator',
            routerLink: '/calculator/wilks'
          },
          {
            label: 'TDEE Calculator',
            routerLink: '/calculator/tdee'
          },
          {
            label: 'Ideal Bodyweight Calculator',
            routerLink: '/calculator/ideal_bodyweight'
          },
        ]
      },
      {
        label: 'About',
        routerLink: '/about'
      }]
  }

  ngOnInit(): void {
    if (localStorage.getItem('registerToken')) {
      this.xAuthToken = localStorage.getItem('registerToken');
      if (this.xAuthToken != null) {
        this.authService.getUser(this.xAuthToken).subscribe(data => {
          console.log('auth: ', data)
          this.userDto = data.data.user;
          console.log('user: ',this.userDto)
          this.isLoggedIn = true;
        })
      }
    }

    if(this.router.url.includes('lifter')) {
      this.lifterUsername = this.route.snapshot.paramMap.get('username');
    }
  }

  navigateToRegister() {
    this.router.navigate(['/auth/login']);
  }

  goToSetting() {
    this.router.navigate(['/settings'])
  }

  goToPublicPage() {
    this.router.navigate(['/lifter/' + this.userDto.username])
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/'])
  }
}

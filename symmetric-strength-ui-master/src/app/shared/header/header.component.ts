import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

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
  about: string = 'About';

  constructor(public router: Router,) {
    this.items = [{
      label: 'Home',
      routerLink: '/home'
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
          {label: '1RM Calculator'},
          {label: 'Wilks Calculator'},
          {label: 'TDEE Calculator'},
          {label: 'Ideal Bodyweight Calculator'},
        ]
      },
      {
        label: 'About',
        routerLink: '/about'
      }]
  }

  ngOnInit(): void {
    console.log('kir: ',localStorage.getItem('registerToken'))
    if(localStorage.getItem('registerToken')) {

    }
  }

  navigateToRegister() {
    this.router.navigate(['/static/login']);
  }
}

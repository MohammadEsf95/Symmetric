import { Component, OnInit } from '@angular/core';
import {filter} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showHeader: boolean = true;

  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
  ).subscribe(event => this.modifyHeader(event));
  }

  ngOnInit(): void {
  }

  modifyHeader(location:any) {
    if (location.url === '/auth/login' || location.url === '/auth/set-password' ||
      location.url === '/auth/forgot-password' || location.url === '/auth/register') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }

}

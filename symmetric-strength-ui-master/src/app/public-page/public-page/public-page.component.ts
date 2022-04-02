import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.css']
})
export class PublicPageComponent implements OnInit {

  username: string | null = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
  }

}

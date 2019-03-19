import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.scss']
})
export class MyNavbarComponent implements OnInit {

  constructor() { }

  user: Object = null;

  ngOnInit() {
    this.user = environment.user
  }

}

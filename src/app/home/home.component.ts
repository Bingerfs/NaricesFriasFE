import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public tokenService: AngularTokenService) { }

  ngOnInit() {
    this.tokenService.validateToken().subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
    console.log(this.tokenService.currentUserData);
    console.log(this.tokenService.currentUserType);
  }

}

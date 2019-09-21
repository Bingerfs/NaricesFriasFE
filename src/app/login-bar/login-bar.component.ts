import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  constructor(private router: Router, private tokenService: AngularTokenService) { }

  ngOnInit() {
  }

  salir(){
    this.tokenService.signOut().subscribe();
  }

}

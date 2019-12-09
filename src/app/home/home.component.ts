import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor(public tokenService: AngularTokenService, public apiService: ApiService, public router:Router) { }

  edit={
    firstSession: false
  }
  session: any;
  updatePass = {
    current: '',
    new: '',
    newConf: ''
  };

  toggle(){
    $('#exampleModalCenter').modal('toggle')
   }

  ngOnInit() {
    this.session=this.tokenService.currentUserData;
    console.log(this.session);
    if(this.session.firstSession)
      this.toggle();
    this.tokenService.validateToken().subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
    console.log(this.tokenService.currentUserData);
    console.log(this.tokenService.currentUserType);
  }

  changePassword(){
    this.tokenService.updatePassword({
      password:             this.updatePass.new,
      passwordConfirmation: this.updatePass.newConf,
      passwordCurrent:      this.updatePass.current,
    }).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
    console.log(this.updatePass);
    this.apiService.updateVoluntario("voluntarios/"+this.tokenService.currentUserData.id, this.edit).subscribe(
      res => console.log(res),
      error => console.log(error)
    );
    this.router.navigateByUrl('home');
  }


}

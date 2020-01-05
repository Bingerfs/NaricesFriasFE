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
   hide(){
    $('#exampleModalCenter').modal('hide')
   }

   hide(){
    $('#exampleModalCenter').modal('hide')
   }

  ngOnInit() {
    //residuos del merge
    /*this.session=this.tokenService.currentUserData;
    console.log(this.session);
    if(this.session.firstSession)
      this.toggle();
      else
      this.hide();*/
    this.tokenService.validateToken().subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
    this.session=this.tokenService.currentUserData;
    console.log(this.session);
    if(this.session.firstSession)
      this.toggle();
    else
     this.hide();
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
    this.ngOnInit();
    this.router.navigateByUrl('home');

  }


}

import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Voluntario } from '../voluntario';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public tokenService: AngularTokenService, public apiService:ApiService, public router:Router) { }

  voluntario:any={
    name:'',
    telefono:'',
    email:''
  }

  updateInfo={
    name:'',
    telefono:''
  }

  ngOnInit() {
    this.tokenService.validateToken().subscribe(
      res =>      {
        console.log(res);
        this.voluntario=this.tokenService.currentUserData;},
      error =>    console.log(error)
    );
  }
  toggle(){
    $('#exampleModalCenter').modal('toggle')
   }

   hide(){
    $('#exampleModalCenter').modal('hide')
   }

   changeInfo(){
    this.apiService.updateVoluntario("voluntarios/"+this.tokenService.currentUserData.id, this.updateInfo).subscribe(
      res => {
        this.ngOnInit();
        this.router.navigateByUrl('/perfil');
        this.hide();
        console.log(res);
      },
      error => console.log(error)
    );
   }

   goBack(){
     
   }

}

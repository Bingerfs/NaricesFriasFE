import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-voluntario',
  templateUrl: './crear-voluntario.component.html',
  styleUrls: ['./crear-voluntario.component.css']
})
export class CrearVoluntarioComponent implements OnInit {

  public invalid: Boolean;
  public errors: Array<string> = [];

  signUpUser = {
    login: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    telefono: ''
  };

  constructor(public tokenService: AngularTokenService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitSign(){
    this.tokenService.registerAccount(this.signUpUser).subscribe(

      (res) => {

        if (res.status != 500){
          this.router.navigateByUrl('/home');
          console.log(res);
          
          alert("Registrado");
        }

      },

      (err) => {
        this.errors=err.error.errors.full_messages;
        console.log(err);
      }
  )
  }

}

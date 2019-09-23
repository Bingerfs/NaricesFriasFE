import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public errors: Array<string> = [];
  signInUser = {
    login: '',
    password: '',
    userType: ''
  };



  constructor(private router: Router, private tokenService: AngularTokenService) { }

  ngOnInit() {
    
  }

  onSubmitSignIn(){
    this.tokenService.signIn(this.signInUser).subscribe(
      (res) => {

        if (res.status == 200){
          alert("Inicio sesion con exito");
          console.log(res);
          this.router.navigate(['home']);
        }

      },

      (err) => {
        this.errors=err.error.errors.full_messages;
        console.log(err);
        this.router.navigateByUrl('/home');
      }
    )
  
  }
  loginFacebook(){

  }

}

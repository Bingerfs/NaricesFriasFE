import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-crear-voluntario',
  templateUrl: './crear-voluntario.component.html',
  styleUrls: ['./crear-voluntario.component.css']
})
export class CrearVoluntarioComponent implements OnInit {

  public invalid: Boolean;
  public errors: Array<Object> = [];

  signUpUser = {
    login: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    telefono: '',
    id: ''
  };

  editUser ={
    id:''
  };

  constructor(public tokenService: AngularTokenService, private router: Router, public acRoute: ActivatedRoute, public apiService: ApiService) { }

  ngOnInit() {
    /*this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id!=undefined){
          this.apiService.getVoluntario("voluntarios/"+data.id).subscribe((data : any)=>{
          this.signUpUser = data;
          });
      }
      })*/
  }

  onSubmitSign(){
    /*if(this.signUpUser.login != ''){
      this.apiService.updateVoluntario("voluntarios/"+this.signUpUser.id, this.signUpUser).subscribe((r)=>{
        this.router.navigateByUrl('/voluntarios')
      })
      }
    else{*/
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
          /*for(var index in this.errors){
            this.apiService.translate('', {key: "trnsl.1.1.20200105T180800Z.3574891e7f150dea.9bde3f8678928a7caa13661f04a72b231e623c9a" , text: this.errors[index], lang: "es"}).subscribe(
              res => {
                this.errors[index]=res;
              }
            )
          }*/
          console.log(err);
        }
        
    )
    this.tokenService.signIn({
      login:    'admin@example.org',
      password: 'password2',
      userType: 'ADMIN'
    });
  //}
}
    
  }



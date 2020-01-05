import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public errors: Array<string> = [];
  closeResult: string;
  signInUser = {
    login: '',
    password: '',
    userType: ''
  };



  constructor(private router: Router, private tokenService: AngularTokenService, private modalService: NgbModal) { }

  ngOnInit() {
    
  }
  onSubmitSignIn(content){
    this.tokenService.signIn(this.signInUser).subscribe(
      (res) => {

        if (res.status == 200){
          // alert("Inicio sesion con exito");
          this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          });
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

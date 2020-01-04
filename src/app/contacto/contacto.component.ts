import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  email={
    correo:'',
    asunto:'',
    nombre:'',
    telefono:''
  }
  constructor(public apiService: ApiService,private router: Router,private location: Location) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.email);
    this.apiService.enviar("contactForm", this.email).subscribe(
      (r)=>{
        console.log(r);
       
       
      });
      alert('Mensaje enviado');
      this.goBack();

      
  }
  goBack(): void
  {
   this.location.back();
  }

}

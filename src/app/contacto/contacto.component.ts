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
    if (this.email.nombre===null|| this.email.nombre===undefined|| this.email.nombre===''){
      alert('El nombre es requerido');
    }
    else if (this.email.telefono==null|| this.email.telefono==undefined|| this.email.telefono==''){
      alert('El telefono es requerido');
    }
    else if (this.email.asunto===null|| this.email.asunto===undefined|| this.email.asunto===''){
      alert('El asunto es requerido');
    }
  
    else{
      alert('Mensaje enviado');
    console.log(this.email);
    this.apiService.enviar("contactForm", this.email).subscribe(
      (r)=>{
        console.log(r);
        
      });
    }
      
  }
  goBack(): void
  {
   this.location.back();
  }

}

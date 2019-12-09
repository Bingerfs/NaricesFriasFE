import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


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
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.email);
    this.apiService.enviar("contactForm", this.email).subscribe(
      (r)=>{
        console.log(r);
      });
    console.log("ALgo?");
  }

}

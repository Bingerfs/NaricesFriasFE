import { Component, OnInit } from '@angular/core';

import { Evento } from '../evento';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {
  public evento: Evento = new Evento();
  constructor(public apiService: ApiService , public acRoute : ActivatedRoute, private location: Location) { }

  // ngOnInit() {
  //   this.acRoute.params.subscribe((data : any) => {
  //     console.log(data.id);
  //     if(data && data.id){
  //         this.apiService.getEventos("calendarios/"+data.id).subscribe((data: Evento)=>{
  //         console.log(data);
  //         this.evento = data;
  //         });
  //     }
  //     else
  //     {
  //         this.evento = new Evento();
  //     }
  //     })
  // }

  ngOnInit() {
    this.acRoute.params.subscribe((data : any) => {
      console.log(data.id);
      if(data && data.id){
          this.apiService.getEvento(data.id).subscribe((data: Evento)=>{
          console.log(data);
          this.evento = data;
          });
      }
      else
      {
          this.evento = new Evento();
      }
      })
  }

  public onSubmit() {
    console.log("Adding a product: " + this.evento.titulo);
    // console.log(this.evento);

    if(this.evento.id) {
      this.apiService.updateEvento("calendarios/"+this.evento.id,this.evento).subscribe((r)=>{
          console.log(r);
          this.location.back();
          // alert("Evento Actualizado !");
      })
    }
    else
    this.apiService.createEvento("calendarios",this.evento).subscribe((r)=>{
    console.log(r);
    this.location.back();
    // alert("Product added !");
    });
  }

  goBack(): void{
    this.location.back();
  }
}


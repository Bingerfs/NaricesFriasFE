import { Component, OnInit } from '@angular/core';
import { EVENTOS } from '../mock-eventos'
import { Evento } from '../evento';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit
{
  fecha = new Date("2019-01-16");
  mes = Date.now();
  calendario: any;

  //eventos = EVENTOS;
  selectedEvento: Evento;
  public eventos: Array<Evento>;

  constructor(public apiService: ApiService , public router: Router) {
    this.calendario = {};
    this.calendario.meses = [];
  }

  onSelect(evento: Evento): void {
    this.selectedEvento = evento;
  }

  ngOnInit() {
    this.apiService.getEventos("calendarios").subscribe((data: Evento[])=>{
    console.log(data);
    this.eventos = data;
    });
  }

  public delete(id:string){
    console.log("delete : " + id);
    var path = 'calendarios/' + id;
    this.apiService.deleteEvento(path).subscribe( (r)=>{
    this.eventos = this.eventos.filter( (p,i)=>{
        if(Number(id) === p.id ) 
        {
          return false;
        }
        return true;} ,this.eventos )
    } );
  }
  /*delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }*/

  public update(id:string){
      console.log("update : " + id );
      this.router.navigateByUrl('/products/add/' + id);
  }
  
  /*private evetosAcalendario()
  {
    for (let index = 0; index < EVENTOS.length; index++) {
      let evento = EVENTOS[index]
      let fecha = new Date(evento.fecha);
      if (this.calendario.meses[fecha.getMonth()]) {
        this.calendario.meses[fecha.getMonth()].contendido.push(evento);
      } else {
        this.calendario.meses[fecha.getMonth()] = {};
        this.calendario.meses[fecha.getMonth()].mes = fecha.getMonth();
        this.calendario.meses[fecha.getMonth()].contendido = [];
        this.calendario.meses[fecha.getMonth()].contendido.push(evento);
      }
    }
  }*/
}

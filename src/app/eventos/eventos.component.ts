import { Component, OnInit, ViewChild} from '@angular/core';
import { EVENTOS } from '../mock-eventos'
import { Evento, Mes } from '../evento';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AngularTokenService } from 'angular-token';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit
{
  // fecha = new Date("2019-12-17");
  fecha = new Date();
  year = this.fecha.getFullYear();
  day = this.fecha.getDate();
  mes = this.fecha.getMonth();
  eventoPrueba: Evento = {id:10, titulo: 'Jornada de Adopción', descripcion: 'Dale un nuevo hogar a los pequeñines que lo perdieron', fecha: new Date("27/10/2019"), hora:"2000-01-01T09:00:00.000Z", lugar:"Refugio Gamaliel"};
  // eventoAux = new Date("2019-10-27");
  // calendario: any;

  selectedEvento: Evento;
  public eventos: Array<Evento>;
  public eventosOriginales: Array<Evento>;
  public eventosMostrar: Evento[] = [];
  public mesElegido: Mes = Mes.Enero;
  public mesMostrar: string = Mes[this.mesElegido];
  
  constructor(public apiService: ApiService , public router: Router,public tokenService: AngularTokenService, private modalService: NgbModal) {
    // this.calendario = {};
    // this.calendario.meses = [];
  }

  onSelect(evento: Evento): void {
    this.selectedEvento = evento;
  }

  ngOnInit() {
    this.apiService.getEventos("calendarios").subscribe((data: Evento[]) => {
      console.log(data);
      this.eventos = data;
      this.sortByDueDate();
      this.eventosOriginales= this.eventos;
      console.log(this.mesElegido);
      console.log(Mes[0]);
      this.filtrarEventos(this.mesElegido);
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

  public update(id:string){
      console.log("update : " + id );
      // this.router.navigateByUrl('/eventos/add/' + id);
      this.router.navigateByUrl('/crearEvento/' + id);
  }

  filtrarEventos(value: number) : void{
    // this.eventos = this.eventosOriginales.filter(e => e.fecha.getMonth() == this.mesElegido);
    this.eventos = this.eventosOriginales.filter(e => e.fecha.getMonth() == value);
    this.mesMostrar = Mes[value];
  }

  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }

  public sortByDueDate(): void {
    this.eventos.sort((a: Evento, b: Evento) => {
        return a.fecha.getTime() - b.fecha.getTime();
    });
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
  closeResult: string;

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.delete(result);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

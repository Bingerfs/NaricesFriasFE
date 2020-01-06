import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../evento'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {
  @Input() evento: Evento;
  // evento: Evento;
  constructor(private route: ActivatedRoute, private eventoService: ApiService, private location: Location) { }
  ngOnInit() {
    //this.getEvento();
  }
  // getEvento(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.eventoService.getEvento(id)
  //     .subscribe(evento => this.evento = evento);
  // }
  // public mostrar() : void {
  //   console.log(this.evento);
  //   console.log(this.evento.fecha);
  // }
}
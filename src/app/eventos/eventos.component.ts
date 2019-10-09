import { Component, OnInit } from '@angular/core';
import { EVENTOS } from '../mock-eventos'
import { Evento } from '../evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit
{
  eventos = EVENTOS;
  selectedEvento: Evento;
  onSelect(evento: Evento): void
  {
    this.selectedEvento = evento;
  }
  constructor() { }
  ngOnInit()
  {
  }
}

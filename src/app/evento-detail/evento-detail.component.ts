import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../evento'

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {
  @Input() evento: Evento;
  constructor() { }
  ngOnInit() {
  }
}

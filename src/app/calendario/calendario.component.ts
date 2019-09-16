import { Component, OnInit } from '@angular/core';
import { Calendario } from './calendario';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
 
evento1:Calendario= {
  
  titulo: 'evento 1',
  descripcion: 'descripcion evento 1',
  fecha: "11/02/2019"
};

  constructor() { }

  ngOnInit() {
  }

}


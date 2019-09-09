import { Component, OnInit } from '@angular/core';
import {Buscado} from './buscado'

@Component({
  selector: 'app-buscados',
  templateUrl: './buscados.component.html',
  styleUrls: ['./buscados.component.css']
})
export class BuscadosComponent implements OnInit {

  mascota1 : Buscado = {
      id: 1,
      name: 'Cachuchin',
      size: 'Pequeño',
      age: 'Cachorro',
      contacto: 79775899,
      esterelizacion: true
  };
  mascota2 : Buscado = {
    id: 1,
    name: 'Kiko',
    size: 'Pequeño',
    age: 'Joven',
    contacto: 79775866,
    esterelizacion: true
};
mascota3 : Buscado = {
  id: 1,
  name: 'Firulais',
  size: 'Grande',
  age: 'adulto',
  contacto: 75896322,
  esterelizacion: true
};
mascota4 : Buscado = {
  id: 1,
  name: 'Shaggy',
  size: 'Pequeño',
  age: 'Cachorro',
  contacto: 74589633,
  esterelizacion: true
};
mascota5 : Buscado = {
  id: 1,
  name: 'Peggy',
  size: 'Mediano',
  age: 'Cachorro',
  contacto: 79458622,
  esterelizacion: true
};
mascota6 : Buscado = {
  id: 1,
  name: 'Lia',
  size: 'Pequeño',
  age: 'Cachorro',
  contacto: 74536955,
  esterelizacion: true
};
  constructor() { }

  ngOnInit() {
  }

}

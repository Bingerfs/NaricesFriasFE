import { Component, OnInit } from '@angular/core';
import {Buscado} from './buscado'
import {BUSCADOS} from '../mock-buscados'
@Component({
  selector: 'app-buscados',
  templateUrl: './buscados.component.html',
  styleUrls: ['./buscados.component.css']
})
export class BuscadosComponent implements OnInit {

  buscados = BUSCADOS;
  selectedBuscado: Buscado;
  constructor() { }

  ngOnInit() {
  }

  onSelect(buscado: Buscado): void{
    this.selectedBuscado = buscado;
  }

}

import { Component, OnInit } from '@angular/core';
import {Buscado} from './buscado';
//import {BUSCADOS} from '../mock-buscados';
import {BuscadoService} from '../buscado.service';

@Component({
  selector: 'app-buscados',
  templateUrl: './buscados.component.html',
  styleUrls: ['./buscados.component.css']
})
export class BuscadosComponent implements OnInit {

  //buscados = BUSCADOS;
  buscados: Buscado[];
  selectedBuscado: Buscado;
  n = 4;
  matrix = Array
  .from({ length: Math.ceil(this.buscados.length / this.n) }, (_, i) => i)
  .map(i => this.buscados.slice(i * this.n, i * this.n + this.n));
  constructor(private buscadoService: BuscadoService) { }

  ngOnInit() {
    this.getBuscados();
    const a = 4;
  }

  onSelect(buscado: Buscado): void{
    this.selectedBuscado = buscado;
  }

  getBuscados(): void {
    this.buscadoService.getBuscados().subscribe(buscados => this.buscados = buscados)
  }


}

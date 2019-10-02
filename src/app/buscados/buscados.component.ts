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
 
  constructor(private buscadoService: BuscadoService) { }

  ngOnInit() {
    this.getBuscados();
  }

  onSelect(buscado: Buscado): void{
    this.selectedBuscado = buscado;
  }

  getBuscados(): void {
    this.buscadoService.getBuscados().subscribe(buscados => this.buscados = buscados)
  }


}

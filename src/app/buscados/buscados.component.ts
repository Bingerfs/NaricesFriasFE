import { Component, OnInit } from '@angular/core';
import {Buscado} from './buscado';
//import {BUSCADOS} from '../mock-buscados';
import {BuscadoService} from '../buscado.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-buscados',
  templateUrl: './buscados.component.html',
  styleUrls: ['./buscados.component.css']
})
export class BuscadosComponent implements OnInit {

  //buscados = BUSCADOS;
  buscados: Buscado[];
  selectedBuscado: Buscado;
 
  constructor(public apiService:ApiService, private buscadoService: BuscadoService) { }

  ngOnInit() {
    //this.getBuscados();
    this.apiService.getAdoptados("buscados").subscribe((data : Buscado[])=>{
      console.log(data);
      this.buscados=data;
    });
  }

  onSelect(buscado: Buscado): void{
    this.selectedBuscado = buscado;
  }

  /*getBuscados(): void {
    this.buscadoService.getBuscados().subscribe(buscados => this.buscados = buscados);
  }*/


}

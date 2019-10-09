import { Component, OnInit } from '@angular/core';
import {Extraviado} from './extraviado';
//import {BUSCADOS} from '../mock-buscados';
import {ExtraviadoService} from '../extraviado.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-extraviados',
  templateUrl: './extraviados.component.html',
  styleUrls: ['./extraviados.component.css']
})
export class ExtraviadosComponent implements OnInit {

  extraviados: Extraviado[];
  selectedExtraviado: Extraviado;
  constructor(public apiService:ApiService, private extraviadoService: ExtraviadoService) { }

  ngOnInit() {
    //this.getExtraviados();
    this.apiService.getAdoptados("extraviados").subscribe((data : Extraviado[])=>{
      console.log(data);
      this.extraviados=data;
    });
  }

  onSelect(extraviado: Extraviado): void{
    this.selectedExtraviado = extraviado;
  }

  /*getExtraviados(): void {
    this.extraviadoService.getExtraviados().subscribe(extraviados => this.extraviados = extraviados)
  }*/


}

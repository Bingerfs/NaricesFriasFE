import { Component, OnInit } from '@angular/core';
import {Buscado} from './buscado';
import { ApiService } from '../api.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-buscados',
  templateUrl: './buscados.component.html',
  styleUrls: ['./buscados.component.css']
})
export class BuscadosComponent implements OnInit {

  public buscados: Array<Buscado>
  selectedBuscado: Buscado;
  Edad: string;

  constructor(public apiService:ApiService, private tokenService: AngularTokenService) { }

  ngOnInit() {
    this.Edad = "Cachorro";
    this.apiService.get("buscados").subscribe((data : Buscado[])=>{
      console.log(data);
      this.buscados=data;
    });
  }

  onSelect(adoptado: Buscado): void{
    this.selectedBuscado = adoptado;
  }
  comprobar(): boolean{
    return true;
  }

}

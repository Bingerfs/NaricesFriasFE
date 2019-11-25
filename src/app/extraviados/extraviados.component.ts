import { Component, OnInit } from '@angular/core';
import {Extraviado} from './extraviado';
import { ApiService } from '../api.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-extraviados',
  templateUrl: './extraviados.component.html',
  styleUrls: ['./extraviados.component.css']
})
export class ExtraviadosComponent implements OnInit {

  
  public extraviados: Array<Extraviado>
  selectedExtraviado: Extraviado;
  Edad: string;

  constructor(public apiService:ApiService, private tokenService: AngularTokenService) { }

  ngOnInit() {
    this.Edad = "Cachorro";
    this.apiService.get("extraviados").subscribe((data : Extraviado[])=>{
      console.log(data);
      this.extraviados=data;
    });
  }

  onSelect(extraviado: Extraviado): void{
    this.selectedExtraviado = extraviado;
  }
  comprobar(): boolean{
    return true;
  }

}

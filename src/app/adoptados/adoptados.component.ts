import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';

import { Adoptado } from '../adoptado';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adoptados',
  templateUrl: './adoptados.component.html',
  styleUrls: ['./adoptados.component.css']
})

export class AdoptadosComponent implements OnInit
{
  public adoptados: Array<Adoptado>
  public selectedAdoptado: Adoptado;
  public imgURL: string = './assets/images/DogProfile.png';
  constructor(public apiService:ApiService, private tokenService: AngularTokenService) { }

  ngOnInit() {
    this.apiService.get("adoptados").subscribe((data : Adoptado[])=>{
      console.log("Datos:");
      console.log(data);
      this.adoptados=data;
      console.log(this.adoptados);
    });
    
  }

  onSelect(adoptado: Adoptado): void{
    this.selectedAdoptado = adoptado;
  }
}

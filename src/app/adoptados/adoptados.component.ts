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
  public adoptados: Array<Adoptado>;
  public tam: string ="none";
  public genero: string ="none";
  public edad: string ="none";
  public adoptadosBackup: Array<Adoptado>;
  public selectedAdoptado: Adoptado;
  public imgURL: string = './assets/images/DogProfile.png';

  constructor(public apiService:ApiService, public tokenService: AngularTokenService) { }


  ngOnInit() {
  
    this.apiService.get("adoptados").subscribe((data : Adoptado[])=>{
      console.log("Datos:");
      console.log(data);
      this.adoptados=data;
      this.adoptadosBackup = data;
      console.log(this.adoptados);
    });
    
  }
  filter(id :number,value:string)
  {
    if(id == 1)
    {
      this.tam = value;
    }
    if(id==2){
      this.genero = value; 
       }
    if(id==3)
    {
        this.edad = value;
    }
    if(this.edad =="none" && this.genero == "none" && this.tam == "none")
    {
      this.adoptados = this.adoptadosBackup;
    }

    //caso un filtro
    if(this.edad !="none" && this.genero == "none" && this.tam == "none")
    {
      this.adoptados = this.adoptadosBackup.filter(a => a.edad ==this.edad)
    }
    if(this.edad =="none" && this.genero != "none" && this.tam == "none")
    {
      this.adoptados = this.adoptadosBackup.filter(a => a.genero ==this.genero)
    }
    if(this.edad =="none" && this.genero == "none" && this.tam != "none")
    {
      this.adoptados = this.adoptadosBackup.filter(a => a.tamagno ==this.tam)
    }
    

    //caso de dos filtros
    if(this.edad !="none" && this.genero != "none" && this.tam == "none")
    {
      this.adoptados = this.adoptadosBackup.filter(a => a.edad ==this.edad && a.genero == this.genero);
    }
    if(this.edad !="none" && this.genero == "none" && this.tam != "none")
    {
      this.adoptados = this.adoptadosBackup.filter(a => a.edad ==this.edad && a.tamagno == this.tam);
    }
    if(this.edad =="none" && this.genero != "none" && this.tam != "none")
    {
      this.adoptados = this.adoptadosBackup.filter(a => a.genero ==this.genero && a.tamagno == this.tam);
    }

    //caso tres filtros
    if(this.edad !="none" && this.genero != "none" && this.tam != "none")
    {
      this.adoptados = this.adoptadosBackup.filter(a => a.edad ==this.edad && a.genero == this.genero && a.tamagno == this.tam);
    }
  }
  

  onSelect(adoptado: Adoptado): void{
    this.selectedAdoptado = adoptado;
  }
}

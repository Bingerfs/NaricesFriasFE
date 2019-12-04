import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';

import { Adoptado } from '../adoptado';
import { ApiService } from '../api.service';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-adoptados',
  templateUrl: './adoptados.component.html',
  styleUrls: ['./adoptados.component.css']
})

export class AdoptadosComponent implements OnInit
{
  public adoptados: Array<Adoptado>
  public adoptadosFiltrados: Array<Adoptado>
  public selectedAdoptado: Adoptado;
  public imgURL: string = './assets/images/DogProfile.png';
  constructor(public apiService:ApiService, private tokenService: AngularTokenService,  private router:Router) { }

  ngOnInit() {
    this.apiService.get("adoptados").subscribe((data : Adoptado[])=>{
      console.log("Datos:");
      console.log(data);
      this.adoptados=data;
      this.adoptadosFiltrados=data;
      console.log(this.adoptados);
    });
    
  }

  onSelect(adoptado: Adoptado): void{
    this.selectedAdoptado = adoptado;
  }

  filtrarTodo(value:any){
    
  }


  filtrarTam(value:any){
   
    if(value!="null")
    {
        this.adoptados = this.adoptadosFiltrados.filter(h => h.tamagno == value);
    }
    else
    {
      this.adoptados = this.adoptadosFiltrados;
    }
    

   
  }

  filtrarGen(value:any){
    if(value!="null")
    {
        this.adoptados = this.adoptadosFiltrados.filter(h => h.genero == value);
    }
    else
    {
      this.adoptados = this.adoptadosFiltrados;
    }
  }

  filtrarEdad(value:any){
    if(value!="null")
    {
        this.adoptados = this.adoptadosFiltrados.filter(h => h.edad == value);
    }
    else
    {
      this.adoptados = this.adoptadosFiltrados;
    }
  }


}

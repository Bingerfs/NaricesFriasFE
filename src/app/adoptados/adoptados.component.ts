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
  public selectedAdoptado: Adoptado;
  public imgURL: string = './assets/images/DogProfile.png';
  constructor(public apiService:ApiService, private tokenService: AngularTokenService,  private router:Router) { }

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

  filtrarTam(value:any){
    // console.log("tam:");
    // console.log(value);
    

    this.adoptados = this.adoptados.filter(h => h.tamagno == value);
    console.log(this.adoptados);
    this.router.navigateByUrl('/adoptados');
    // this.apiService.get("adoptados").subscribe((data : Adoptado[])=>{
    // this.adoptados=data;
    // });
   
  }

  filtrarGen(value:any){
    this.adoptados = this.adoptados.filter(h => h.genero == value);
    
    console.log(this.adoptados);
  }

  filtrarEdad(value:any){
    this.adoptados = this.adoptados.filter(h => h.edad == value);
    
    console.log(this.adoptados);
  }


}

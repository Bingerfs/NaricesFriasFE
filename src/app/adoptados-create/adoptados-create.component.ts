import { Component, OnInit } from '@angular/core';
import { Adoptados } from '../adoptados';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-adoptados-create',
  templateUrl: './adoptados-create.component.html',
  styleUrls: ['./adoptados-create.component.css']
})
export class AdoptadosCreateComponent implements OnInit
{
  public adoptado: Adoptados = new Adoptados();

  constructor(public apiService: ApiService, private acRoute:ActivatedRoute, public router:Router, private location: Location)
  {

  }

  ngOnInit()
  {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
          this.apiService.getAdoptado("adoptados/"+data.id).subscribe((data : Adoptados)=>{
          this.adoptado = data;
          });
      }
      else
      {
          this.adoptado = new Adoptados();
      }
      })
  }

  onSubmitCreate()
  {
    if(this.adoptado.id){
        this.apiService.updateAdoptado("adoptados/"+this.adoptado.id,this.adoptado).subscribe((r)=>{
          this.router.navigateByUrl('/adoptados')
        })
      }
    else{
        console.log("Agregar perro:" + this.adoptado.edad + this.adoptado.esteriliacion + this.adoptado.genero + this.adoptado.tamagno + this.adoptado.telefono );
      this.apiService.createAdoptados("adoptados", this.adoptado).subscribe(
        (r)=>{
          console.log(r);
        }
      );
     }
  }

  goBack(): void
  {
    this.location.back();
  }
}

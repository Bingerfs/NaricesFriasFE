import { Component, OnInit } from '@angular/core';
import { Buscado} from '../buscados/buscado';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-buscados-create',
  templateUrl: './buscados-create.component.html',
  styleUrls: ['./buscados-create.component.css']
})
export class BuscadosCreateComponent implements OnInit {

  public buscado: Buscado = new Buscado();

  constructor(
    public apiService: ApiService, 
    private acRoute:ActivatedRoute, 
    public router:Router, 
    private location: Location)
  {

  }

  ngOnInit()
  {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
          this.apiService.getAdoptado("buscados/"+data.id).subscribe((data : Buscado)=>{
          this.buscado = data;
          });
      }
      else
      {
          this.buscado = new Buscado();
      }
      })
  }

  onSubmitCreate()
  {
    if(this.buscado.id){
        this.apiService.updateAdoptado("buscados/"+this.buscado.id,this.buscado).subscribe((r)=>{
          this.router.navigateByUrl('/buscados')
        })
      }
    else{
        console.log("Agregar perro:" + this.buscado.age + this.buscado.esterilizacion + this.buscado.gender + this.buscado.size + this.buscado.contact );
      this.apiService.createAdoptados("buscados", this.buscado).subscribe(
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

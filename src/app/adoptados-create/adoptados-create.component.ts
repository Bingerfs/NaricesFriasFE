import { Component, OnInit } from '@angular/core';
import { Adoptados } from '../adoptados';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adoptados-create',
  templateUrl: './adoptados-create.component.html',
  styleUrls: ['./adoptados-create.component.css']
})
export class AdoptadosCreateComponent implements OnInit
{
  public adoptado: Adoptados = new Adoptados();

  constructor(public apiService: ApiService)
  {

  }

  ngOnInit()
  {
  }

  onSubmitCreate()
  {
    console.log("Agregar perro:" + this.adoptado.edad + this.adoptado.esteriliacion + this.adoptado.genero + this.adoptado.tamagno + this.adoptado.telefono );
    this.apiService.createAdoptados("adoptados", this.adoptado).subscribe(
      (r)=>{
        console.log(r);
      }
    );
  }

}

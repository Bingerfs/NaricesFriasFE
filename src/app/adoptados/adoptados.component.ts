import { Component, OnInit } from '@angular/core';
import { ADOPTADOS} from '../mock-adoptados'
import { Adoptados } from '../adoptados';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adoptados',
  templateUrl: './adoptados.component.html',
  styleUrls: ['./adoptados.component.css']
})
export class AdoptadosComponent implements OnInit
{
  public rows: Array<Adoptados>
  adoptados = ADOPTADOS;
  

  /*
  selectedAdoptado: Adoptado;
  onSelect(adoptado: Adoptado): void
  {
  this.selectedAdoptado = adoptado;
  }*/

  constructor(public apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getAdoptados("adoptados").subscribe((data : Adoptados[])=>{
      console.log(data);
      this.rows=data;
    });
  }

}

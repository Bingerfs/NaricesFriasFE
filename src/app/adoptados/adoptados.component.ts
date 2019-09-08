import { Component, OnInit } from '@angular/core';
import { ADOPTADOS} from '../mock-adoptados'
import { Adoptado } from '../adoptado';

@Component({
  selector: 'app-adoptados',
  templateUrl: './adoptados.component.html',
  styleUrls: ['./adoptados.component.css']
})
export class AdoptadosComponent implements OnInit
{
  adoptados = ADOPTADOS;

  /*
  selectedAdoptado: Adoptado;
  onSelect(adoptado: Adoptado): void
  {
  this.selectedAdoptado = adoptado;
  }*/

  constructor() { }

  ngOnInit() {
  }

}

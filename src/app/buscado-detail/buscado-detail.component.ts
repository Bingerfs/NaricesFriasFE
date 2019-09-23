import { Component, OnInit, Input} from '@angular/core';
import {Buscado} from '../buscados/buscado';

@Component({
  selector: 'app-buscado-detail',
  templateUrl: './buscado-detail.component.html',
  styleUrls: ['./buscado-detail.component.css']
})
export class BuscadoDetailComponent implements OnInit {

  @Input() buscado: Buscado;
  constructor() { }

  ngOnInit() {
  }

}

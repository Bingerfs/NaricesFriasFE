import { Component, OnInit, Input} from '@angular/core';
import {Extraviado} from '../extraviados/extraviado';

@Component({
  selector: 'app-extraviado-detail',
  templateUrl: './extraviado-detail.component.html',
  styleUrls: ['./extraviado-detail.component.css']
})
export class ExtraviadoDetailComponent implements OnInit {

  @Input() extraviado: Extraviado;
  constructor() { }

  ngOnInit() {
  }

}

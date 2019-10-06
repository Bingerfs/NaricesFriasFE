import { Component, OnInit } from '@angular/core';
import {Extraviado} from './extraviado';
//import {BUSCADOS} from '../mock-buscados';
import {ExtraviadoService} from '../extraviado.service';

@Component({
  selector: 'app-extraviados',
  templateUrl: './extraviados.component.html',
  styleUrls: ['./extraviados.component.css']
})
export class ExtraviadosComponent implements OnInit {

  extraviados: Extraviado[];
  selectedExtraviado: Extraviado;
  constructor(private extraviadoService: ExtraviadoService) { }

  ngOnInit() {
    this.getExtraviados();
  }

  onSelect(extraviado: Extraviado): void{
    this.selectedExtraviado = extraviado;
  }

  getExtraviados(): void {
    this.extraviadoService.getExtraviados().subscribe(extraviados => this.extraviados = extraviados)
  }


}

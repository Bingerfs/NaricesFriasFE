import { Component, OnInit, Input} from '@angular/core';
import {Extraviado} from '../extraviados/extraviado';
import {Location} from '@angular/common';
import {ExtraviadoService} from '../extraviado.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-extraviado-detail',
  templateUrl: './extraviado-detail.component.html',
  styleUrls: ['./extraviado-detail.component.css']
})
export class ExtraviadoDetailComponent implements OnInit {

  @Input() extraviado: Extraviado;
  constructor(
    private route: ActivatedRoute,
    private extraviadoService: ExtraviadoService,
    private location: Location
  ) { }

  ngOnInit(): void
  {
    this.getExtraviado();
  }

  getExtraviado(): void 
  {

    const id = +this.route.snapshot.paramMap.get('id');
    this.extraviadoService.getExtraviado(id).subscribe(extraviado =>this.extraviado = extraviado);
  }
  goBack(): void
  {
    this.location.back();
    console.log("hola");
  }
}

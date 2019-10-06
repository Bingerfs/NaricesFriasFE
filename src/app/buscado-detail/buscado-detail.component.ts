import { Component, OnInit, Input} from '@angular/core';
import {Buscado} from '../buscados/buscado';
import {Location} from '@angular/common';
import {BuscadoService} from '../buscado.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscado-detail',
  templateUrl: './buscado-detail.component.html',
  styleUrls: ['./buscado-detail.component.css']
})
export class BuscadoDetailComponent implements OnInit {

    @Input() buscado: Buscado;

    constructor(private route: ActivatedRoute, private buscadoService: BuscadoService, private location: Location) 
    { 

    }

    ngOnInit(): void 
    {
      this.getBuscado();
    }

    getBuscado(): void 
    {

      const id = +this.route.snapshot.paramMap.get('id');
      this.buscadoService.getBuscado(id).subscribe(b =>this.buscado = b);
    }

    goBack(): void
    {
      this.location.back();
    }

}

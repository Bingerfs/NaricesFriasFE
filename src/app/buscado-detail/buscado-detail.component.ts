import { Component, OnInit, Input} from '@angular/core';
import {Buscado} from '../buscados/buscado';
import {Location} from '@angular/common';
import {BuscadoService} from '../buscado.service';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';
import { BuscadosComponent } from '../buscados/buscados.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-buscado-detail',
  templateUrl: './buscado-detail.component.html',
  styleUrls: ['./buscado-detail.component.css']
})
export class BuscadoDetailComponent implements OnInit {

    @Input() buscado: Buscado;

    constructor(private apiService:ApiService,
      private route: ActivatedRoute, 
      private buscadoService: BuscadoService, 
      private location: Location, 
      private bus:BuscadosComponent,
      private router:Router) 
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
    delete(id:any){
      var path = 'buscados/' + id;
      this.apiService.deleteAdoptado(path).subscribe(
        (r)=>{
          console.log(r);
          this.bus.selectedBuscado=null;
          this.bus.ngOnInit();
          this.router.navigateByUrl('/buscados');
        }
      );
      
    }
  
    edit(id:any){
      this.router.navigate(['/crearBuscado', id]);
    }

    goBack(): void
    {
      this.location.back();
    }

}

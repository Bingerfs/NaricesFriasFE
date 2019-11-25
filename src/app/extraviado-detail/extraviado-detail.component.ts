import { Component, OnInit, Input} from '@angular/core';
import {Extraviado} from '../extraviados/extraviado';
import {Location} from '@angular/common';
import {ExtraviadoService} from '../extraviado.service';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';
import { ExtraviadosComponent } from '../extraviados/extraviados.component';
import { RouterModule, Router } from '@angular/router';


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
    private location: Location,
    private apiService:ApiService,
    private bus:ExtraviadosComponent,
    private router:Router
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
  delete(id:any){
    var path = 'extraviados/' + id;
    this.apiService.deleteAdoptado(path).subscribe(
      (r)=>{
        console.log(r);
        this.bus.selectedExtraviado=null;
        this.bus.ngOnInit();
        this.router.navigateByUrl('/extraviados');
      }
    );
    
  }

  edit(id:any){
    this.router.navigate(['/crearExtraviado', id]);
  }
  goBack(): void
  {
    this.location.back();
    console.log("hola");
  }
}

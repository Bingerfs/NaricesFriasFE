import { Component, OnInit, Input} from '@angular/core';
import {Buscado} from '../buscados/buscado';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';
import { BuscadosComponent } from '../buscados/buscados.component';
import { RouterModule, Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-buscado-detail',
  templateUrl: './buscado-detail.component.html',
  styleUrls: ['./buscado-detail.component.css']
})
export class BuscadoDetailComponent implements OnInit {

  public buscado: Buscado;
  constructor(
    private route: ActivatedRoute,
    public tokenService:AngularTokenService, 
    private apiService:ApiService, 
    private router:Router, 
    private location: Location
    /*private adopt:AdoptadosComponent*/) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    var path = "buscados/" + id
    this.apiService.get(path)
    .subscribe((buscado: Buscado) => this.buscado = buscado);
  }

  delete(id:any){
    var path = 'buscados/' + id;
    this.apiService.delete(path).subscribe(
      (r)=>{
        console.log(r);

        this.router.navigateByUrl('/buscados');
      }
    );
    
  }

  edit(id:any){
    this.router.navigate(['/crearBuscado', id]);
  }

  goBack()
  {
    this.location.back();
  }

}

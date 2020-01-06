import { Component, OnInit, Input} from '@angular/core';
import {Extraviado} from '../extraviados/extraviado';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';
import { ExtraviadosComponent } from '../extraviados/extraviados.component';
import { RouterModule, Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';


@Component({
  selector: 'app-extraviado-detail',
  templateUrl: './extraviado-detail.component.html',
  styleUrls: ['./extraviado-detail.component.css']
})
export class ExtraviadoDetailComponent implements OnInit {

  public extraviado: Extraviado;
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
    .subscribe((extraviado: Extraviado) => this.extraviado = extraviado);
  }

  delete(id:any){
    var path = 'extraviados/' + id;
    this.apiService.delete(path).subscribe(
      (r)=>{
        console.log(r);

        this.router.navigateByUrl('/extraviados');
      }
    );
    
  }

  edit(id:any){
    this.router.navigate(['/crearExtraviado', id]);
  }

  goBack()
  {
    this.location.back();
  }

}

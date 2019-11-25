import { Component, OnInit, Input} from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { Adoptado } from '../adoptado';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adoptado-detail',
  templateUrl: './adoptado-detail.component.html',
  styleUrls: ['./adoptado-detail.component.css']
})

export class AdoptadoDetailComponent implements OnInit {

  public adoptado: Adoptado;
  
  constructor(
    private route: ActivatedRoute,
    private tokenService:AngularTokenService, 
    private apiService:ApiService, 
    private router:Router, 
    private location: Location) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    var path = "adoptados/" + id
    this.apiService.get(path)
    .subscribe((adoptado: Adoptado) => this.adoptado = adoptado);
  }

  delete(id:any){
    var path = 'adoptados/' + id;
    this.apiService.delete(path).subscribe(
      (r)=>{
            console.log(r);
            this.router.navigateByUrl('/adoptados');
      }
    );
    
  }

  edit(id:any){
    this.router.navigate(['/crearAdoptado', id]);
  }

  goBack()
  {
    this.location.back();
  }
}

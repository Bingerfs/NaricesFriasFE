import { Component, OnInit, Input} from '@angular/core';
import { Adoptados } from '../adoptados'
import { AngularTokenService } from 'angular-token';
import { ApiService } from '../api.service';
import { RouterModule, Router } from '@angular/router';
import { AdoptadosComponent } from '../adoptados/adoptados.component';


@Component({
  selector: 'app-adoptado-detail',
  templateUrl: './adoptado-detail.component.html',
  styleUrls: ['./adoptado-detail.component.css']
})
export class AdoptadoDetailComponent implements OnInit {

  @Input() adoptado: Adoptados;
  constructor(private tokenService:AngularTokenService, private apiService:ApiService, private router:Router, private adopt:AdoptadosComponent) { }

  ngOnInit() {
  }

  delete(id:any){
    var path = 'adoptados/' + id;
    this.apiService.deleteAdoptado(path).subscribe(
      (r)=>{
        console.log(r);
        this.adopt.selectedAdoptado=null;
        this.adopt.ngOnInit();
        this.router.navigateByUrl('/adoptados');
      }
    );
    
  }

  edit(id:any){
    this.router.navigate(['/crearAdoptado', id]);
  }

}

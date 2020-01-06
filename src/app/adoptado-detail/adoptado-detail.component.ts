import { Component, OnInit, Input} from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { Adoptado } from '../adoptado';
import { ApiService } from '../api.service';
import {NgbdModalBasic} from '../Pop-up/modal-basic';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-adoptado-detail',
  templateUrl: './adoptado-detail.component.html',
  styleUrls: ['./adoptado-detail.component.css']
})

export class AdoptadoDetailComponent implements OnInit {

  public adoptado: Adoptado;
  closeResult: string;

  constructor(
    private route: ActivatedRoute,
    public tokenService:AngularTokenService, 
    private apiService:ApiService, 
    private router:Router, 
    private location: Location,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    var path = "adoptados/" + id
    this.apiService.get(path)
    .subscribe((adoptado: Adoptado) => this.adoptado = adoptado);
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.delete(result);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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

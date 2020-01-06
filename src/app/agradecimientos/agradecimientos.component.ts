import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { Agradecimiento } from '../Models/agradecimiento';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agradecimientos',
  templateUrl: './agradecimientos.component.html',
  styleUrls: ['./agradecimientos.component.css']
})
export class AgradecimientosComponent implements OnInit {

  public agradecimientos: Array<Agradecimiento>;
  public filtrados: Array<Agradecimiento>;
  public agradecimientosBackup: Array<Agradecimiento>;
  public selectedAgradecimiento: Agradecimiento;
  closeResult: string;
  public imgURL: string = './assets/images/DogProfile.png';
  constructor(public apiService:ApiService, 
    public tokenService: AngularTokenService, 
    private router:Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.apiService.get("agradecimientos").subscribe((data : Agradecimiento[])=>{
      console.log("Datos:");
      console.log(data);
      this.agradecimientos=data;
      this.filtrados=data;
      this.agradecimientosBackup = data;
      console.log(this.agradecimientos);
    });
    
  }
  onSelect(agradecimiento: Agradecimiento): void{
    this.selectedAgradecimiento = agradecimiento;
  }


  delete(id:any){
    var path = 'agradecimientos/' + id;
    this.apiService.delete(path).subscribe(
      (r)=>{
            console.log(r);
            this.router.navigateByUrl('/agradecimientos');
      }
    );
    
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
  edit(id:any){
    this.router.navigate(['/crearAgradecimiento', id]);
  }
}

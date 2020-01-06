import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { Apadrinamiento } from '../Models/apadrinamiento';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apadrinamiento',
  templateUrl: './apadrinamiento.component.html',
  styleUrls: ['./apadrinamiento.component.css']
})

export class ApadrinamientoComponent implements OnInit
{
  public apadrinamientos: Array<Apadrinamiento>;
  public filtrados: Array<Apadrinamiento>;
  public apadrinamientosBackup: Array<Apadrinamiento>;
  public selectedApadrinamiento: Apadrinamiento;
  closeResult: string;
  public imgURL: string = './assets/images/DogProfile.png';
  constructor(public apiService:ApiService, 
    private tokenService: AngularTokenService, 
    private router:Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.apiService.get("apadrinados").subscribe((data : Apadrinamiento[])=>{
      console.log("Datos:");
      console.log(data);
      this.apadrinamientos=data;
      this.filtrados=data;
      this.apadrinamientosBackup = data;
      console.log(this.apadrinamientos);
    });
    
  }
  onSelect(apadrinamiento: Apadrinamiento): void{
    this.selectedApadrinamiento = apadrinamiento;
  }
  
   



  delete(id:any){
    var path = 'apadrinados/' + id;
    this.apiService.delete(path).subscribe(
      (r)=>{
            console.log(r);
            window.location.reload();
            this.router.navigateByUrl('/apadrinamientos');
           
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
    this.router.navigate(['/crearApadrinamiento', id]);
  }
 
  
  

  


}

import { Component, OnInit } from '@angular/core';
import { Extraviado} from '../extraviados/extraviado';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-extraviados-create',
  templateUrl: './extraviados-create.component.html',
  styleUrls: ['./extraviados-create.component.css']
})
export class ExtraviadosCreateComponent implements OnInit {

  public extraviado: Extraviado = new Extraviado();
  public imgURL: string = './assets/images/DogProfile.png';
  fileToUpload : File =null;
  public selectedFile = null;

  constructor(
    public apiService: ApiService, 
    private acRoute:ActivatedRoute, 
    public router:Router, 
    private location: Location)
  {

  }

  ngOnInit()
  {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
          this.apiService.getAdoptado("extraviados/"+data.id).subscribe((data : Extraviado)=>{
          this.extraviado = data;
          });
      }
      else
      {
          this.extraviado = new Extraviado();
      }
      })
  }
  onFileSelected(event)
  {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  onSubmitCreate()
  {
    if(this.extraviado.id){
        this.apiService.updateAdoptado("extraviados/"+this.extraviado.id,this.extraviado).subscribe((r)=>{
          this.router.navigateByUrl('/extraviados')
        })
      }
    else{
        console.log("Agregar perro:" + this.extraviado.age + this.extraviado.esterilizacion + this.extraviado.gender + this.extraviado.size + this.extraviado.contact );
      this.apiService.createAdoptados("extraviados", this.extraviado).subscribe(
        (r)=>{
          console.log(r);
        }
      );
     }
  }

  handleFileInput(file: FileList)
  {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imgURL = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  goBack(): void
  {
    this.location.back();
  }
}

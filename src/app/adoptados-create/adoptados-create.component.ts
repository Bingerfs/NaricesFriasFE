import { Component, OnInit } from '@angular/core';
import { Adoptados } from '../adoptados';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-adoptados-create',
  templateUrl: './adoptados-create.component.html',
  styleUrls: ['./adoptados-create.component.css']
})
export class AdoptadosCreateComponent implements OnInit
{
  public adoptado: Adoptados = new Adoptados();
  public imgURL: string = './assets/images/DogProfile.png';

  fileToUpload : File =null;

  constructor(public apiService: ApiService, private acRoute:ActivatedRoute, public router:Router, private location: Location)
  {

  }

  ngOnInit()
  {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
          this.apiService.getAdoptado("adoptados/"+data.id).subscribe((data : Adoptados)=>{
          this.adoptado = data;
          });
      }
      else
      {
          this.adoptado = new Adoptados();
      }
      })
  }

  onSubmitCreate()
  {
    if(this.adoptado.id){
        this.apiService.updateAdoptado("adoptados/"+this.adoptado.id,this.adoptado).subscribe((r)=>{
          this.router.navigateByUrl('/adoptados')
        })
      }
    else{
        console.log("Agregar perro:" + this.adoptado.edad + this.adoptado.esteriliacion + this.adoptado.genero + this.adoptado.tamagno + this.adoptado.telefono );
      
        this.apiService.createAdoptados("adoptados", this.adoptado).subscribe(
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

  OnSubmit(Image)
  {
    this.apiService.postFile("adoptados",this.fileToUpload,this.adoptado.edad)
    .subscribe(data =>{
      console.log('Done');
      Image.value = null;
    });
  }

  /*preview(files) 
  {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }*/

  goBack(): void
  {
    this.location.back();
  }
}

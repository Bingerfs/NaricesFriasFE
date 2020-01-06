import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, SelectMultipleControlValueAccessor } from "@angular/forms";

import { Adoptado } from '../adoptado';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adoptados-create',
  templateUrl: './adoptados-create.component.html',
  styleUrls: ['./adoptados-create.component.css']
})

export class AdoptadosCreateComponent implements OnInit
{
  public form: FormGroup;
  public adoptado: Adoptado = new Adoptado();
  public imgURL: string = './assets/images/DogProfile.png';
  public fileToUpload : File =null;
  public selectedItem = "Seleccionar...";
  public loading : Boolean;
  @ViewChild('btnClose') btnClose : ElementRef ;

  constructor(
    public fb: FormBuilder,
    public apiService: ApiService,
    private acRoute:ActivatedRoute,
    public router:Router,
    private location: Location)
  {
    this.form = this.fb.group({
      id:[""],
      picture: [null],
      edad: [''],
      tamagno: [''],
      esterilizacion: [''],
      genero: [''],
      telefono: [''],
      description: ['']
    })
   
  }

  ngOnInit()
  {
      this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
        if(data && data.id){
            this.apiService.get("adoptados/"+data.id)
            .subscribe((data : Adoptado)=>{
                this.form.get("edad").setValue(data.edad);
                this.form.get("tamagno").setValue(data.tamagno);
                this.form.get("esterilizacion").setValue(data.esterilizacion);
                this.form.get("genero").setValue(data.genero);
                this.form.get("telefono").setValue(data.telefono);
                this.form.get("description").setValue(data.description);
                this.form.get("id").setValue(data.id);
                this.adoptado = data;
                this.imgURL = `https://idrkman.herokuapp.com/adoptados/${data.id}/download`;
            });
            
        }
        else
        {
            this.adoptado = new Adoptado();
        }
      })
  }

  uploadImage(event)
  {
    var reader = new FileReader();
    const file = (event.target as HTMLInputElement).files[0];

    this.form.patchValue({picture: file});
    this.form.get('picture').updateValueAndValidity()
    console.log(event);
    
    this.fileToUpload = file;
    reader.onload = (event:any)=>{ this.imgURL = event.target.result;}
    reader.readAsDataURL(this.fileToUpload);
  }


  submitForm() {
    if (this.form.get('edad').value==null|| this.form.get('edad').value==undefined|| this.form.get('edad').value==''){
      alert('La edad es requerida');
      this.btnClose.nativeElement.click();
    }
    else if (this.form.get('tamagno').value==null|| this.form.get('tamagno').value==undefined|| this.form.get('tamagno').value==''){
      alert('El tamaño es requerido');
      this.btnClose.nativeElement.click();
    }
    else if (this.form.get('telefono').value==null|| this.form.get('telefono').value==undefined|| this.form.get('telefono').value==''){
      alert('El telefono es requerido');
      this.btnClose.nativeElement.click();
    }
    else{
      console.log(this.form.value);
      this.loading = true;
     
      var formData: any = new FormData();
      if(this.form.get('picture').value !=null)
      {
         formData.append("picture", this.form.get('picture').value);
      }
      //formData.append("picture", this.form.get('picture').value);
      formData.append("edad", this.form.get('edad').value);
      formData.append("tamagno", this.form.get('tamagno').value);
      formData.append("esterilizacion", this.form.get('esterilizacion').value);
      formData.append("genero", this.form.get('genero').value);
      formData.append("telefono", this.form.get('telefono').value);
      formData.append("description", this.form.get('description').value);
     
      if(this.adoptado.id){
        this.apiService.update("adoptados/"+this.adoptado.id,formData).subscribe((r)=>{
          console.log(r);
          this.loading = false;
          this.router.navigateByUrl('/adoptados');
          this.btnClose.nativeElement.click();
        })
      }
      else
      {
          this.apiService.create("adoptados", formData).subscribe(
            (r)=>{
              console.log(r);
              this.router.navigateByUrl('/adoptados');
              this.btnClose.nativeElement.click();
            });
      }

    }

  }


  goBack(): void
  {
   this.location.back();
  }
  getImgURL()
  {
  //   if(this.timeStamp) {
  //     return this.imgURL + '?' + this.timeStamp;
  //  }
    return this.imgURL;
  }
    // handleFileInput(file: FileList)
  // {
  //   this.fileToUpload = file.item(0);

  //   var reader = new FileReader();
  //   reader.onload = (event:any)=>{
  //     this.imgURL = event.target.result;
  //   }
  //   reader.readAsDataURL(this.fileToUpload);
  // }
}

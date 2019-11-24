import { Component, OnInit } from '@angular/core';
import { Buscado} from '../buscados/buscado';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-buscados-create',
  templateUrl: './buscados-create.component.html',
  styleUrls: ['./buscados-create.component.css']
})
export class BuscadosCreateComponent implements OnInit {

  form: FormGroup;
  public buscado: Buscado = new Buscado();
  public imgURL: string = './assets/images/DogProfile.png';

  fileToUpload : File =null;

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
      name:[''],
      age: [''],
      size: [''],
      esterilizacion: [''],
      gender: [''],
      contact: [''],
      description: ['']
    })
  }

  ngOnInit()
  {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
          this.apiService.get("buscados/"+data.id).subscribe((data : Buscado)=>{
          this.form.get("age").setValue(data.age);
          this.form.get("name").setValue(data.name);
          this.form.get("size").setValue(data.size);
          this.form.get("esterilizacion").setValue(data.esterilizacion);
          this.form.get("gender").setValue(data.gender);
          this.form.get("contact").setValue(data.contact);
          this.form.get("description").setValue(data.description);
          this.form.get("id").setValue(data.id);
          this.buscado = data;
          });
      }
      else
      {
          this.buscado = new Buscado();
          
      }
    })
  }

  uploadImage(event)
  {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      picture: file
    });
    this.form.get('picture').updateValueAndValidity()

    console.log(event);
    this.fileToUpload = file;

    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imgURL = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  submitForm() {
    
    var formData: any = new FormData();
    formData.append("picture", this.form.get('picture').value);
    formData.append("age", this.form.get('age').value);
    formData.append("size", this.form.get('size').value);
    formData.append("esterilizacion", this.form.get('esterilizacion').value);
    formData.append("gender", this.form.get('gender').value);
    formData.append("contact", this.form.get('contact').value);
    formData.append("description", this.form.get('description').value);
    console.log(this.form.value)
    if(this.buscado.id){
      this.apiService.update("buscados/"+this.buscado.id,formData).subscribe((r)=>{
        console.log(r);
        this.router.navigateByUrl('/buscados');
      })
    }
  else{

    this.apiService.create("buscados", formData).subscribe(
      (r)=>{
        console.log(r);
        this.router.navigateByUrl('/buscados');
      });
    }
  }

  goBack(): void
  {
   this.location.back();
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

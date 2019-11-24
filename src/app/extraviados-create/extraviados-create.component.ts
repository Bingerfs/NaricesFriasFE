import { Component, OnInit } from '@angular/core';
import { Extraviado} from '../extraviados/extraviado';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-extraviados-create',
  templateUrl: './extraviados-create.component.html',
  styleUrls: ['./extraviados-create.component.css']
})
export class ExtraviadosCreateComponent implements OnInit {

  form: FormGroup;
  public extraviado: Extraviado = new Extraviado();
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
          this.apiService.get("extraviados/"+data.id).subscribe((data : Extraviado)=>{
          this.form.get("age").setValue(data.age);
          this.form.get("size").setValue(data.size);
          this.form.get("esterilizacion").setValue(data.esterilizacion);
          this.form.get("gender").setValue(data.gender);
          this.form.get("contact").setValue(data.contact);
          this.form.get("description").setValue(data.description);
          this.form.get("id").setValue(data.id);
          this.extraviado = data;
          });
      }
      else
      {
          this.extraviado = new Extraviado();
          
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
    if(this.extraviado.id){
      this.apiService.update("extraviados/"+this.extraviado.id,formData).subscribe((r)=>{
        console.log(r);
        this.router.navigateByUrl('/extraviados');
      })
    }
  else{

    this.apiService.create("extraviados", formData).subscribe(
      (r)=>{
        console.log(r);
        this.router.navigateByUrl('/extraviados');
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';
import { Agradecimiento } from '../Models/agradecimiento';

@Component({
  selector: 'app-agradecimientos-create',
  templateUrl: './agradecimientos-create.component.html',
  styleUrls: ['./agradecimientos-create.component.css']
})
export class AgradecimientosCreateComponent implements OnInit {

  
  public form: FormGroup;
  public agradecimiento: Agradecimiento = new Agradecimiento();
  public imgURL: string;
  public fileToUpload : File =null;

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
      description: ['']
    })
  }

  ngOnInit()
  {
      this.imgURL = './assets/images/DogProfile.png'
      this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
        if(data && data.id){
            this.apiService.get("agradecimientos/"+data.id)
            .subscribe((data : Agradecimiento)=>{
                this.form.get("description").setValue(data.description);
                this.form.get("id").setValue(data.id);
                this.agradecimiento = data;
                this.imgURL = `http://localhost:3000/agradecimientos/${data.id}/download`;
            });
            
        }
        else
        {
            this.agradecimiento = new Agradecimiento();
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
    var formData: any = new FormData();
    if(this.form.get('picture').value !=null)
    {
       formData.append("picture", this.form.get('picture').value);
    }
    //formData.append("picture", this.form.get('picture').value);
    // formData.append("name", this.form.get('name').value);
    formData.append("description", this.form.get('description').value);
    console.log(this.form.value);
    if(this.agradecimiento.id){
      this.apiService.update("agradecimientos/"+this.agradecimiento.id,formData).subscribe((r)=>{
        console.log(r);
        this.router.navigateByUrl('/agradecimientos');
      })
    }
    else
    {
        this.apiService.create("agradecimientos", formData).subscribe(
          (r)=>{
            console.log(r);
            this.router.navigateByUrl('/agradecimientos');
          });
    }
  }
  goBack(): void
  {
   this.location.back();
  }
  getImgURL()
  {
    return this.imgURL;
  }

}

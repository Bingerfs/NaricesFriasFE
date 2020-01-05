import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';
import { Adoptado } from '../adoptado';
import { Apadrinamiento } from '../Models/apadrinamiento';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apadrinamiento-create',
  templateUrl: './apadrinamiento-create.component.html',
  styleUrls: ['./apadrinamiento-create.component.css']
})
export class ApadrinamientoCreateComponent implements OnInit {

  public form: FormGroup;
  public apadrinado: Apadrinamiento = new Apadrinamiento();
  public imgURL: string;
  public fileToUpload : File =null;

  constructor(
    public fb: FormBuilder,
    public apiService: ApiService,
    private acRoute:ActivatedRoute,
    public router:Router, private modalService: NgbModal,
    private location: Location)
  {
    this.form = this.fb.group({
      id:[""],
      picture: [null],
      name: [''],
      description: ['']
    })
  }

  ngOnInit()
  {
      this.imgURL = './assets/images/DogProfile.png'
      this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
        if(data && data.id){
            this.apiService.get("apadrinados/"+data.id)
            .subscribe((data : Apadrinamiento)=>{
                this.form.get("name").setValue(data.name);
                this.form.get("description").setValue(data.description);
                this.form.get("id").setValue(data.id);
                this.apadrinado = data;
                this.imgURL = `http://localhost:3000/apadrinados/${data.id}/download`;
            });
            
        }
        else
        {
            this.apadrinado = new Apadrinamiento();
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
    formData.append("name", this.form.get('name').value);
    formData.append("description", this.form.get('description').value);
    console.log(this.form.value);
    if(this.apadrinado.id){
      this.apiService.update("apadrinados/"+this.apadrinado.id,formData).subscribe((r)=>{
        console.log(r);
        this.router.navigateByUrl('/apadrinamientos');
      })
    }
    else
    {
        this.apiService.create("apadrinados", formData).subscribe(
          (r)=>{
            console.log(r);
            this.router.navigateByUrl('/apadrinamientos');
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
      this.salir();
    });
  }


  salir(){
   
    this.router.navigateByUrl('/apadrinamientos');
  }

}
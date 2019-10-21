import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  API_URL : string = "http://localhost:3000/"

  public getAdoptados (path: string)
  {
    var endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }
  public createAdoptados(path: string, body: any)
  {
    var endpoint = this.API_URL + path;
    return this.http.post(endpoint, body);
    
  }

  public deleteAdoptado(path: string){
    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);
  }

  public getAdoptado(path: string){
    var endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }

  public updateAdoptado(path:string, body:any){
    var endpoint = this.API_URL + path;
    return this.http.put(endpoint, body);
  }
  public postFile(path: string, fileToUpload: File, body: any)
  {
    var endpoint = this.API_URL + path;
    var formData: FormData = new FormData();
    formData.append('picture',fileToUpload,fileToUpload.name);
    formData.append('edad',body);
    console.log('Works so far');
    console.log(formData.getAll("picture"));
    return this.http.post<any>(endpoint,formData)
  }
}

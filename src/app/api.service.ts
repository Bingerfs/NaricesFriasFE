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

  public getVoluntarios(path:string){
    var endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }

  public getVoluntario(path:string){
    var endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }

  public updateVoluntario(path:string, body:any){
    var endpoint = this.API_URL + path;
    return this.http.put(endpoint, body);
  }

  public deleteVoluntario(path:string){
    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);
  }
}

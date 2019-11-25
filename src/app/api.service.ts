import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL : string = "http://localhost:3000/"

  constructor(public http: HttpClient) { }

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

  public getEventos(path: string)
  {
    var endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }
  public createEvento(path: string, body: any)
  {
    var endpoint = this.API_URL + path;
    return this.http.post(endpoint, body);
  }
  public deleteEvento(path: string){
    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);
  }
  public getEvento(path: string){
    var endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }
  public updateEvento(path:string, body:any){
    var endpoint = this.API_URL + path;
    return this.http.put(endpoint, body);
  }
}

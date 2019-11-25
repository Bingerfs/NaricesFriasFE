import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL : string = "http://localhost:3000/"

  constructor(public http: HttpClient) { }

  public get(path: string)
  {
    var endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }
  public create(path: string, body: any)
  {
    var endpoint = this.API_URL + path;
    return this.http.post<any>(endpoint, body);
    
  }

  public delete(path: string){
    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);
  }

  public update(path:string, body:any){
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

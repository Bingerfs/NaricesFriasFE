import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from './evento';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL : string = "http://localhost:3000/"
  API_EMAIL_SENDER: string = "http://localhost:7002/"

  constructor(public http: HttpClient) { }


 // public getAdoptados (path: string)

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


  // public getEventos(path: string)
  // {
  //   var endpoint = this.API_URL + path;
  //   return this.http.get(endpoint);
  // }
  public createEvento(path: string, body: any)
  {
    var endpoint = this.API_URL + path;
    return this.http.post(endpoint, body);
  }
  public deleteEvento(path: string){
    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);
  }
  // public getEvento(path: string){
  //   var endpoint = this.API_URL + path;
  //   return this.http.get(endpoint);
  // }
  public updateEvento(path:string, body:any){
    var endpoint = this.API_URL + path;
    return this.http.put(endpoint, body);
  }
  
  public getEvento(id: number) : Observable<Evento>{
    var endpoint = `${this.API_URL}calendarios/${id}`;
    console.log(endpoint);
    //return this.http.get<Evento>(endpoint);
    return this.http.get<Evento>(endpoint)
    .pipe(
      map((data)=>{
        data.fecha = new Date(data.fecha);
        return data;
      })
    );
  }

  public getEventos(path: string) : Observable<Evento[]>{
    var endpoint = this.API_URL + path;
    return this.http.get<Evento[]>(endpoint)
    .pipe(
      map((data)=>{
        data.forEach(x => x.fecha = new Date(x.fecha) )
        return data;
      })
    );
  }

  public deleteVoluntario(path:string){
    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);
  }

  public enviar(path:string, body:any){
    var endpoint = this.API_EMAIL_SENDER + path;
    console.log("jkjlj",endpoint);
    return this.http.post(endpoint, body);
  }
}

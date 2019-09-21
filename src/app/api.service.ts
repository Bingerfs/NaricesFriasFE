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
}

import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Buscado} from './buscados/buscado';
import {BUSCADOS} from './mock-buscados';

@Injectable({
  providedIn: 'root'
})
export class BuscadoService {

  constructor() { }
  getBuscados(): Observable<Buscado[]>{
    return of(BUSCADOS);
  }
  getBuscado(id: number): Observable<Buscado>
  {
    return of(BUSCADOS.find(b => b.id == id));
  }
}

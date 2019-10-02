import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Extraviado} from './extraviados/extraviado';
import {EXTRAVIADOS} from './mock-extraviados';

@Injectable({
  providedIn: 'root'
})
export class ExtraviadoService {

  constructor() { }
  getExtraviado(): Observable<Extraviado[]>{
    return of(EXTRAVIADOS);
  }
}

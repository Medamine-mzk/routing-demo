import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmploye } from './model/Employe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
 
  constructor(private http : HttpClient) { }
  private url : string="../assets/data/employes.data.json"

  getEmployes() : Observable<IEmploye>{

    return this.http.get<IEmploye>(this.url);

  }
  
}

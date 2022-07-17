
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl: string="http://localhost:8080/api/v1";

  constructor(private http:HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(this.baseUrl+"/all");
  }

  save(one:Person): Observable<any>{
    let headers=new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl+"/save", JSON.stringify(one), {headers:headers});
  }

  delete(id:number):Observable<any>{
      return this.http.get(this.baseUrl+"/delete/"+id);
  }

}

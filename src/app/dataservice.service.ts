import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  apiUrl=" https://api.github.com/users/id"

  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get(" https://api.github.com/users")
  }
  // getUsers(){
  //     return this.http.get(" https://api.github.com/user" );
    
  // }
  getUsers(){
    return this.http.get<any[]>(this.apiUrl);
   }
}

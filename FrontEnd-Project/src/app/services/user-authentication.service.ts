import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
     responseType: 'text',
     Authorization: 'my-auth-token',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Credentials' : 'true'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private http: HttpClient) { }

  getAuthenticated(formdata) {
     return this.http.post('http://localhost:3000/authenticate', formdata);
  }



}

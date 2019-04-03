import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class SignUpService {

  constructor(private http: HttpClient) { }


  savesignUpdetails(registerForm) {
    console.log('registration values in service  - ', registerForm )
    this.http.post('http://localhost:3000/saveDetails', registerForm).subscribe(res =>
    console.log('res after sign in ', res));
  }
}

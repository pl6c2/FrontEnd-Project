import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {

  private modelName = new Array();
  private accuracyValue = new Array();
  private demo: any;
  constructor(private http: HttpClient) { }

  getModelNames(modelTitle) {
    return this.http.get('http://localhost:3000/api/posts/exi?modeltitle=' + modelTitle );
  }

  getAccuracy(modelTitle) {
    return this.http.get('http://localhost:3000/api/posts/exi?modeltitle=' + modelTitle );
  }

  getLossValue(modelTitle) {
    return this.http.get('http://localhost:3000/api/posts/exi?modeltitle=' + modelTitle );
  }
}

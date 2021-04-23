import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any>{
    return this.http.get(this.productURL).pipe(Response => Response)
  }
}

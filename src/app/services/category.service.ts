import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryURL = "http://localhost:3000/categories"

  constructor(private http: HttpClient ) {}

  getCategory(): Observable<any>{
    return this.http.get(this.categoryURL).pipe(Response => Response)
  }
}

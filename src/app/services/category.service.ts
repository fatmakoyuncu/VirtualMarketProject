import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryURL = ""

  constructor(private http: HttpClient ) {}

  getCategory(){

  }
}

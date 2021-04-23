import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  productList: Product[]

  constructor(private http: HttpClient, private productService: ProductService) { }

  ngOnInit(): void {
    this.getPro()
  }

  getPro(){
    this.productService.getProduct().subscribe(Response => this.productList = Response)
  }

}

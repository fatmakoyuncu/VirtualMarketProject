import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() event: EventEmitter<any> = new EventEmitter()

  categoryList: Category[]
  productList: Product[]

  constructor(private http: HttpClient, private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.categoryService.getCategory().subscribe(Response => this.categoryList = Response)
  }

  getProduct(i) {
    this.productService.getProduct().subscribe(Response => {
      this.productList = Response;

      const result = this.productList.filter(item => item.category_id == i.id)

      this.event.emit(result)
    })


  }



}

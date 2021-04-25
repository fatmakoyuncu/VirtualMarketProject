import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  isProductRemoved: boolean = false
  cartItems : CartItem[] = []

  ngOnInit(): void {
    this.cartItems = this.cartService.list()
  }

  removeFromCart(product:Product){
    if(confirm("Ürünü sepetinizden silmek istediğinize emin misiniz?")){
      this.cartService.removeFromCart(product)
      this.isProductRemoved=true
    }
  }

}

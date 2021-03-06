import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { CART_ITEM_LIST } from '../models/cart-item-list';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[]

  constructor() { }

  addToCart(product: Product): void{
    var addedItem = CART_ITEM_LIST.find(t => t.product.id == product.id)

    if(addedItem){
      addedItem.quantity += 1;
    }

    else{
      var cartItem = new CartItem()
      cartItem.product = product
      cartItem.quantity = 1
      CART_ITEM_LIST.push(cartItem)
    }

  }

  list(): CartItem[] {
    return CART_ITEM_LIST
  }

  removeFromCart(product:Product){
    var addedItem = CART_ITEM_LIST.find(t => t.product.id == product.id)

    var indexNo = CART_ITEM_LIST.indexOf(addedItem)
    if(indexNo != -1){
      CART_ITEM_LIST.splice(indexNo, 1)
    }
  }
}

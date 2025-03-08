import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = [];

  addToCart(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  removeFromCart(index) {
    this.items.splice(index, 1);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

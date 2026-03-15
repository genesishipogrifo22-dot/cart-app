import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  imports: [],
  templateUrl: './cart.html',
})
export class Cart {
  items: CartItem[] = [];

  total = 0;

  idProductEventEmitter = new EventEmitter();


  onDeleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }

}

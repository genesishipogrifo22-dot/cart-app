import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  imports: [],
  templateUrl: './cart.html'
})
export class Cart {

  @Input() items : CartItem[] = [];

}

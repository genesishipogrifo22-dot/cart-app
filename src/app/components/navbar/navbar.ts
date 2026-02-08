import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class Navbar {
  @Input() items: CartItem[] = [];
  @Output() openEventEmitter = new EventEmitter();

  openCart(): void {
    this.openEventEmitter.emit();
  }
}

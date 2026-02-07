import { Component, signal } from '@angular/core';
import { CartApp } from './components/cart-app';

@Component({
  selector: 'app-root',
  imports: [CartApp],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('3-cart-app');
}

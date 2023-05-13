import { Component, Input } from '@angular/core';
import {faXmark,faBars,faEarth,faXmarkCircle} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  @Input() isShopComponent: boolean = true;

  faCartShopping=faCartShopping;
  faXmark=faXmark;
  faBars=faBars;
  faEarth=faEarth;
  faXmarkCircle=faXmarkCircle;
  menuOpen = true;

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current , 0);
     
  }

  constructor (private cartService: CartService) { }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}

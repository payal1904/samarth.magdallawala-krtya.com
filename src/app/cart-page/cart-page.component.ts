import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { EcomService } from '../services/ecom/ecom.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
 cart!:Cart;
  constructor(private cartService:CartService ,private router:Router) {
    this.setCart();
   }

  ngOnInit(): void {
  }
  setCart(){
    this.cart =this.cartService.getCart();
  }
  removeFromeCart(cartItem:CartItem){
    alert('Are you sure to remove this product');
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
    
  }
  remove(){
    this.router.navigateByUrl('/trash')
   }

  clicktoProceed(){
    this.router.navigateByUrl('/login-page')
    }

    toggle(){
      var birthyear = prompt('Are you sure to remove this product');
      
    }

}

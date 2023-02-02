import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { EcomService } from '../services/ecom/ecom.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  cart!:Cart;

  food: any;

  constructor(private cartService:CartService ,private router:Router) { }

  ngOnInit(): void {

    this.cart = this.cartService.getremoveCart();
        console.log("this.food", this.food)

  }
  setCart(){
    this.cart =this.cartService.getCart();
  }
  removeFromeCart(cartItem:CartItem){
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

  }
 


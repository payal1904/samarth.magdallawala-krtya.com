import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { EcomService } from '../services/ecom/ecom.service';

import { Cloths } from '../shared/models/food';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
   food!:Cloths;
  constructor(activatedRoute:ActivatedRoute,
    ecomService:EcomService,private CartService:CartService, private router:Router) { 
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = ecomService.gatFoodById(params['id']);
        console.log("this.food", this.food)
        
      })
      
    }

  ngOnInit(): void {
  }
  addToCart(){
    this.CartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}

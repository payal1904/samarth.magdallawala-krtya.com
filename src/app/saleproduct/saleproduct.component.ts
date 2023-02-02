import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { Sale } from '../shared/models/sale';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-saleproduct',
  templateUrl: './saleproduct.component.html',
  styleUrls: ['./saleproduct.component.css']
})
export class SaleproductComponent implements OnInit {

  sale!:Sale;
  constructor(private activatedRoute:ActivatedRoute,
    saleService:SalesService,private CartService:CartService, private router:Router) { 
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.sale = saleService.getsaleById(params['id']);
        console.log("this.sale", this.sale)
        
      })
      
    }

  ngOnInit(): void {
  }
  addToCart(){  
    this.CartService.addToCart(this.sale);
    this.router.navigateByUrl('/cart-page')
  }
}

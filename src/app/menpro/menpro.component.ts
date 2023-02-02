import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenService } from '../services/men.service';
import { mencloths } from '../shared/models/mencloth';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-menpro',
  templateUrl: './menpro.component.html',
  styleUrls: ['./menpro.component.css']
})
export class MenproComponent implements OnInit {
 mencloth!:mencloths;
 
 
  constructor(private CartService:CartService,private router:Router,private activateroute:ActivatedRoute,private menservices:MenService) { 
    activateroute.params.subscribe((params)=>{
      if(params['id'])
      this.mencloth = menservices.getMenById(params['id'])
    })
  }

  ngOnInit(): void {
  }
  addToCart(){  
    this.CartService.addToCart(this.mencloth);
    this.router.navigateByUrl('/cart-page')
  }
}

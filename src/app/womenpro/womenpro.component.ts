import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { WomenService } from '../services/women.service';
import { Cloth } from '../shared/models/cloth';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-womenpro',
  templateUrl: './womenpro.component.html',
  styleUrls: ['./womenpro.component.css']
})
export class WomenproComponent implements OnInit {
cloth!:Cloth;
  
  constructor(private CartService:CartService,private router:Router,private activateRoute:ActivatedRoute,private womenservice:WomenService) {
    activateRoute.params.subscribe((params)=>{
     if(params['id'])
     this.cloth=womenservice.getClothById(params['id'])
    })
      
    
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.CartService.addToCart(this.cloth);
    this.router.navigateByUrl('/cart-page')
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { OthersService } from '../services/others.service';
import { other } from '../shared/models/others';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-otherpro',
  templateUrl: './otherpro.component.html',
  styleUrls: ['./otherpro.component.css']
})
export class OtherproComponent implements OnInit {
other!:other;
  constructor(private CartService:CartService,private router:Router,private activateroute:ActivatedRoute,private otherservices:OthersService)
   {
    activateroute.params.subscribe((params)=>{
      if(params['id'])
      this.other = otherservices.getOtherById(params['id'])
    })
    }

  ngOnInit(): void {
  }
  addToCart(){  
    this.CartService.addToCart(this.other);
    this.router.navigateByUrl('/cart-page')
  }
}

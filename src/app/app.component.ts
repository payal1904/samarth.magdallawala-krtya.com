import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  constructor(private router:Router){

  }
  clicktoCart(){
  this.router.navigateByUrl('/cart-page')
  }
  clicktoProceed(){
    this.router.navigateByUrl('/login-page')
    }
  
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  click(){
    this.router.navigateByUrl('/saleproduct')
    }
}

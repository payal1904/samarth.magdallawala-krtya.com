import { Component, OnInit } from '@angular/core';
import { Sale } from '../shared/models/sale';
import { SalesService } from '../services/sales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productsale',
  templateUrl: './productsale.component.html',
  styleUrls: ['./productsale.component.css']
})
export class ProductsaleComponent implements OnInit {
  sale:Sale[]=[];
  constructor(private ms:SalesService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.sale=this.ms.getA().filter(Sale => Sale.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else
      this.sale= this.ms.getA();
  
    })
    }

  toggle(item: any) {

    console.log("item", item);
    console.log("Cloths", this.sale)

    var productObj = this.sale.find(p=>p.id == item.id);
    if(productObj) {
      if(productObj.favorite) {
        productObj.favorite = false;
      } else {
        productObj.favorite = true;
      }
      
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { EcomService } from '../services/ecom/ecom.service';
import { Cloths } from '../shared/models/food';
// import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Cloths:Cloths[]=[];
 
  constructor(private fs:EcomService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      this.Cloths=this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['name'])
      this.Cloths=this.fs.getAllFoodByTag(params['name'])
      else
      this.Cloths=this.fs.getAll();

    })
    
}

clicktoProduct(){
  this.router.navigateByUrl('/product')
  }
  Clicktosale(){
    this.router.navigateByUrl('/sale')
  }

  toggle(item: any) {

    console.log("item", item);
    console.log("Cloths", this.Cloths)

    var productObj = this.Cloths.find(p=>p.id == item.id);
    if(productObj) {
      if(productObj.favorite) {
        productObj.favorite = false;
      } else   {
        productObj.favorite = true;
      }

    }
  }
}


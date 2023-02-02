import { Component, OnInit } from '@angular/core';
import { EcomService } from '../services/ecom/ecom.service';
import { Cloths } from '../shared/models/food';
// import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
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
  clicktoWomen(){
    this.router.navigateByUrl('/women')
    }
    clicktoMen(){
      this.router.navigateByUrl('/men')
      }
      clicktoOthers(){
        this.router.navigateByUrl('/others')
        }  


        toggle(item: any) {

          // console.log("item", item);
          // console.log("Cloths", this.Cloths)

          var productObj = this.Cloths.find(p=>p.id == item.id);
         // console.log("Cloths", this.Cloths)
          if(productObj) {
            if(productObj.favorite) {
              productObj.favorite = false;
              //console.log("productObj.favorite", productObj.favorite);
            } else {
              productObj.favorite = true;
              //console.log("productObj.favorite", productObj.favorite);
            }
            
          }
          // var main = document.getElementById('main');
          //    function toggle(){
          //     if(main.style.color == "red"){
          //       main.style.color ="black"
          //     }
          //     else{
          //       main.style.color ="red"
          //     }
        }

}

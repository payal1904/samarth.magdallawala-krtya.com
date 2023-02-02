import { Component, OnInit } from '@angular/core';
import { WomenService } from '../services/women.service';
import { Cloth } from '../shared/models/cloth';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  cloths:Cloth[]=[];
  constructor(private wo:WomenService,private route:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.cloths=this.wo.getAl().filter(cloth =>cloth.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else
      this.cloths=this.wo.getAl();
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

          console.log("item", item);
          console.log("cloths", this.cloths)
      
          var productObj = this.cloths.find(p=>p.id == item.id);
          if(productObj) {
            if(productObj.favorite) {
              productObj.favorite = false;
            } else {
              productObj.favorite = true;
            }
            
          }
        }
}

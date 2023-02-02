import { Component, OnInit } from '@angular/core';
import { MenService } from '../services/men.service';
import { mencloths } from '../shared/models/mencloth';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
 mencloths:mencloths[]=[];
  constructor(private ms:MenService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

  this.route.params.subscribe(params =>{
    if(params['searchItem'])
    this.mencloths=this.ms.getAlll().filter(mencloth => mencloth.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
    else
    this.mencloths= this.ms.getAlll();

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
          console.log("mencloth", this.mencloths)

          var productObj = this.mencloths.find(p=>p.id == item.id);
          if(productObj) {
            if(productObj.favorite) {
              productObj.favorite = false;
            } else {
              productObj.favorite = true;
            }
            
          }
}
}

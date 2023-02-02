import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OthersService } from '../services/others.service';
import { other } from '../shared/models/others';
@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
  others:other[]=[];
  constructor(private ot:OthersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
this.route.params.subscribe(params =>{
  if(params['searchItem'])
  this.others=this.ot.getAllll().filter(other=>other.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
  else
  this.others= this.ot.getAllll();

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
        console.log("others", this.others)
    
        var productObj = this.others.find(p=>p.id == item.id);
        if(productObj) {
          if(productObj.favorite) {
            productObj.favorite = false;
          } else {
            productObj.favorite = true;
          }
          
        }
      }
}

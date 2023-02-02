import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomService } from '../services/ecom/ecom.service';
import { Cloths } from '../shared/models/food';

@Component({
  selector: 'app-serching',
  templateUrl: './serching.component.html',
  styleUrls: ['./serching.component.css']
})
export class SerchingComponent implements OnInit {
  Cloths:Cloths[]=[];

  constructor(private fs:EcomService,private route:ActivatedRoute) { }

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

}

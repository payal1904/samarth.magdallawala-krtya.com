import { Injectable } from '@angular/core';
// import { count } from 'rxjs';
import { Cloths } from 'src/app/shared/models/food';   
import { Name } from 'src/app/shared/models/name';

@Injectable({
  providedIn: 'root'
})
export class EcomService {

  constructor() { }
  gatFoodById(id:number):Cloths{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(name:string):Cloths[]{
    return name =="All"? 
    this.getAll():  this.getAll().filter(food => food.name?.includes(name));
 }
  
 getAllTag():Name[]{
  return[
  {name:'All' , count: 16},
  {name:'Dress' , count: 5},
  {name:'kurti' , count: 1},
  {name:'Skirt' , count: 1},
  {name:'Shorts' , count: 1},
  {name:'Saree' , count: 1},
  {name:'Jeans' , count: 3},
  {name:'Shirt' , count: 1},
  {name:'T-shirt' , count: 2},
  {name:'Sherwani' , count: 1},

  ]
 }


  getAll():Cloths[]{
    return[
      {
        id:1,
        name:'Dress',
        price:45,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/l2.jpg',
        tags:['One Piece','Party Wear'],
        origins:'Italy',
      },
      {
        id:2,
        name:'Saree',
        price:47,
        favorite:false,
        star:4.0,
        imageUrl:'/assets/h5.jpg',
        tags:['Banarasi Saree','Indian Saree'],
        origins:'India',
      },
      {
        id:3,
        name:'Kurti',
        price:49,
        favorite:false,
        star:3.5,
        imageUrl:'/assets/h6.jpg',
        tags:['Straight Kurta','kurta Wear'],
        origins:'China',
      },
      {
        id:4,
        name:'Jeans',
        price:45,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/h4.jpg',
        tags:['Flared','Light Jeans'],
        origins:'Singapor',
      },
      {
        id:5,
        name:'Shirt',
        price:43,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/m1.jpg',
        tags:['Casual Shirt','Men Slim Fit'],
        origins:'USA',
      },
      {
        id:6,
        name:'T-shirt',
        price:41,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/m2.jpg',
        tags:['Printed T-shirt','Striped Men'],
        origins:'Russia',
      },
      {
        id:7,
        name:'Jeans',
        price:49,
        favorite:false,
        star:4,
        imageUrl:'/assets/m3.jpg',
        tags:['Tapered Men Jeans','Slim Men Jeans'],
        origins:'India',
      },
      {
        id:8,
        name:'Sherwani',
        price:42,
        favorite:false,
        star:5,
        imageUrl:'/assets/m4.jpg',
        tags:['Floral Print Sherwani','Embroidered'],
        origins:'Franse',
      },
      {
        id:9,
        name:'Skirt',
        price:40,
        favorite:false,
        star:4,
        imageUrl:'/assets/ski2.jpg',
        tags:['Flared Skirt','Straight Skirt'],
        origins:'Italy',
      },
      {
        id:10,
        name:'T-shirt',
        price:41,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/bt2.jpg',
        tags:['Cotton T-Shirt ','Blend'],
        origins:'London',
      },
      {
        id:11,
        name:'Shorts',
        price:49,
        favorite:false,
        star:5,
        imageUrl:'/assets/sh2.jpg',
        tags:['Short For Girls','Cotton Shorts'],
        origins:'China',
      },
      {
        id:12,
        name:'Jeans',
        price:45,
        favorite:false,
        star:4,
        imageUrl:'/assets/g3.jpg',
        tags:['Slim Jeans','Jeans'],
        origins:'Franse',
      },
      {
        id:13,
        name:'Watch',
        price:43,
        favorite:false,
        star:3.5,
        imageUrl:'/assets/watch2.jpg',
        tags:['Smartwatch'],
        origins:'USA',
      },
      {
        id:14,
        name:'Shoes',
        price:44,
        favorite:false,
        star:3,
        imageUrl:'/assets/sh1.jpg',
        tags:['Nike','Shoes For Men'],
        origins:'India',
      },
      {
        id:15,
        name:'Perfume',
        price:39,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/per3.jpg',
        tags:['Eau De Parfum'],
        origins:'Italy',
      },
      {
        id:16,
        name:'Bags',
        price:40,
        favorite:false,
        star:4,
        imageUrl:'/assets/bag2.jpg',
        tags:['Hand-held Bag'],
        origins:'Franse',
      }
    ]
  }
}

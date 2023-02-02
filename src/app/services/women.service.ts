import { Injectable } from '@angular/core';
import { Cloth } from '../shared/models/cloth';

@Injectable({
  providedIn: 'root'
})
export class WomenService {

  constructor() { }

getClothById(id:number):Cloth{
  return this.getAl().find(cloth => cloth.id == id)!;
}

  getAl():Cloth[]{
return [
 
  {        
    id:17,
    name:'T-shirt',
    price:45,
    favorite:false,
    star:4.5,
    imageUrl:'/assets/wo6.jpg',
    tags:['Printed T-shirt','Striped Women'],
    origins:'Italy',
  },
  {
    id:18,
    name:'Jeans',
    price:47,
    favorite:false,
    star:4.0,
    imageUrl:'/assets/wo3.jpg',
    tags:['Flared','Light Jeans'],
    origins:'India',
  },
  {
    id:19,
    name:'Tops',
    price:49,
    favorite:false,
    star:3.5,
    imageUrl:'/assets/wo4.jpg',
    tags:['Plen Tops','Striped Women'],
    origins:'China',
  },
  {
    id:20,
    name:'Shorts',
    price:45,
    favorite:false,
    star:4.5,
    imageUrl:'/assets/wo5.jpg',
    tags:['Short For Girls','Cotton Shorts'],
    origins:'Singapor',
  },
  {
    id:21,
    name:'T-Shirt',
    price:43,
    favorite:false,
    star:4.5,
    imageUrl:'/assets/h7.jpg',
    tags:['T-shirt','Striped Women'],
    origins:'USA',
  },
  {
    id:22,
    name:'Jeans',
    price:41,
    favorite:false,
    star:4.5,
    imageUrl:'/assets/wo7.jpg',
    tags:['Tapered Jeans','Slim Women Jeans'],
    origins:'Russia',
  },
  {
    id:23,
    name:'T-Shirt',
    price:49,
    favorite:false,
    star:4,
    imageUrl:'/assets/wo8.jpg',
    tags:['T-shirt','Striped Women'],
    origins:'India',
  },
  {
    id:24,
    name:'Shorts',
    price:42,
    favorite:false,
    star:5,
    imageUrl:'/assets/wo9.jpg',
    tags:['Short For Girls','Cotton Shorts'],
    origins:'Franse',
  },
  {
    id:25,
    name:'Tops',
    price:40,
    favorite:false,
    star:4,
    imageUrl:'/assets/wo10.jpg',
    tags:['Plen Tops','Striped Women'],
    origins:'Italy',
  },
  {
    id:26,
    name:'T-shirt',
    price:41,
    favorite:false,
    star:4.5,
    imageUrl:'/assets/wo11.jpg',
    tags:['Cotton T-Shirt ','Blend'],
    origins:'London',
  },
  {
    id:27,
    name:'Dress',
    price:49,
    favorite:false,
    star:5,
    imageUrl:'/assets/wo12.jpg',
    tags:['One Piece','Party Wear'],
    origins:'China',
  },
  {
    id:28,
    name:'Jeans',
    price:45,
    favorite:false,
    star:4,
    imageUrl:'/assets/wo13.jpg',
    tags:['Slim Jeans','Jeans'],
    origins:'Franse',
  },
  {
    id:29,
    name:'Dress',
    price:43,
    favorite:false,
    star:3.5,
    imageUrl:'/assets/wo14.jpg',
    tags:['One Piece','Party Wear'],
    origins:'USA',
  },
  {
    id:30,
    name:'T-Shirt',
    price:44,
    favorite:false,
    star:3,
    imageUrl:'/assets/wo15.jpg',
    tags:['Cotton T-Shirt ','Blend'],
    origins:'India',
  },
  {
    id:31,
    name:'Shirt',
    price:39,
    favorite:false,
    star:4.5,
    imageUrl:'/assets/wo16.jpg',
    tags:['Casual Shirt','Slim Fit'],
    origins:'Italy',
  },
  {
    id:32,
    name:'Dress',
    price:40,
    favorite:false,
    star:4,
    imageUrl:'/assets/wo2.jpg',
    tags:['One Piece','Party Wear'],
    origins:'Franse',
  }

 
]
  }
}

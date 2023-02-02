import { Injectable } from '@angular/core';
import { other } from '../shared/models/others';
@Injectable({
  providedIn: 'root'
})
export class OthersService {

  constructor() { }

  getOtherById(id:number):other{
   return this.getAllll().find(other => other.id==id)!;
  }

  getAllll():other[]{
    return[
      {        
        id:49,
        name:'Dress',
        price:45,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/ot1.jpg',
        tags:['One Piece','Party Wear'],
        origins:'Italy',
      },
      {
        id:50,
        name:'T-Shirt',
        price:47,
        favorite:false,
        star:4.0,
        imageUrl:'/assets/ot10.jpg',
        tags:['T-shirt','Striped Women'],
        origins:'India',
      },
      {
        id:51,
        name:'Shirt,Jeans',
        price:49,
        favorite:false,
        star:3.5,
        imageUrl:'/assets/ot11.jpg',
        tags:['Plen','Striped'],
        origins:'China',
      },
      {
        id:52,
        name:'Top,Jeans',
        price:45,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/ot12.jpg',
        tags:['Short For Girls','Cotton Shorts'],
        origins:'Singapor',
      },
      {
        id:53,
        name:'Shoes',
        price:43,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/ot3.jpg',
        tags:['Nike','Shoes For Girls'],
        origins:'USA',
      },
      {
        id:54,
        name:'Shoes',
        price:41,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/ot4.jpg',
        tags:['Nike','Shoes For Men'],
        origins:'Russia',
      },
      {
        id:55,
        name:'Shoes',
        price:49,
        favorite:false,
        star:4,
        imageUrl:'/assets/ot5.jpg',
        tags:['Puma','Shoes For Men'],
        origins:'India',
      },
      {
        id:56,
        name:'Shoes',
        price:42,
        favorite:false,
        star:5,
        imageUrl:'/assets/ot6.jpg',
        tags:['Shoes For Men','Men'],
        origins:'Franse',
      },
      {
        id:57,
        name:'Watch',
        price:40,
        favorite:false,
        star:4,
        imageUrl:'/assets/wa1.jpg',
        tags:['Women Watch'],
        origins:'Italy',
      },
      {
        id:58,
        name:'Watch',
        price:41,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/wa2.jpg',
        tags:['Smartwatch'],
        origins:'London',
      },
      {
        id:59,
        name:'Watch',
        price:49,
        favorite:false,
        star:5,
        imageUrl:'/assets/wa3.jpg',
        tags:['Smartwatch'],
        origins:'China',
      },
      {
        id:60,
        name:'Watch',
        price:45,
        favorite:false,
        star:4,
        imageUrl:'/assets/wa4.jpg',
        tags:['Men Watch'],
        origins:'Franse',
      },
      {
        id:61,
        name:'Perfume',
        price:43,
        favorite:false,
        star:3.5,
        imageUrl:'/assets/ot2.jpg',
        tags:['Eau De Parfume'],
        origins:'USA',
      },
      {
        id:62,
        name:'Perfume',
        price:44,
        favorite:false,
        star:3,
        imageUrl:'/assets/ot7.jpg',
        tags:['Coco Parfum'],
        origins:'India',
      },
      {
        id:63,
        name:'Perfume',
        price:39,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/ot8.jpg',
        tags:['Giola Parfum'],
        origins:'Italy',
      },
      {
        id:64,
        name:'Perfume',
        price:40,
        favorite:false,
        star:4,
        imageUrl:'/assets/ot9.jpg',
        tags:['G&D Parfum'],
        origins:'Franse',
      }
    
    ]
  }
}

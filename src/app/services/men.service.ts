import { Injectable } from '@angular/core';
import { mencloths } from '../shared/models/mencloth';

@Injectable({
  providedIn: 'root'
})
export class MenService {

  constructor() { }

  getMenById(id:number):mencloths{
    return this.getAlll().find(mencloths => mencloths.id ==id)!;
  }

  getAlll():mencloths[]{
    return[
      {        
        id:33,
        name:'T-shirt',
        price:45,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/me2.jpg',
        tags:['Printed T-shirt','Striped Men'],
        origins:'Italy',
      },
      {
        id:34,
        name:'T-Shirt',
        price:47,
        favorite:false,
        star:4.0,
        imageUrl:'/assets/me6.jpg',
        tags:['Flared','Light T-shirt'],
        origins:'India',
      },
      {
        id:35,
        name:'T-Shirt',
        price:49,
        favorite:false,
        star:3.5, 
        imageUrl:'/assets/me10.jpg',
        tags:['Plen','Striped men'],
        origins:'China',
      },
      {
        id:36,
        name:'Jeans',
        price:45,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/me12 .jpg',
        tags:['Men Jeans','Cotton'],
        origins:'Singapor',
      },
      {
        id:37,
        name:'T-Shirt',
        price:43,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/men5.jpg',
        tags:['Plen T-Shirt','Striped Women'],
        origins:'USA',
      },
      {
        id:38,
        name:'Shirt',
        price:41,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/me16.jpg',
        tags:['Chex Shirt','Full Slive'],
        origins:'Russia',
      },
      {
        id:39,
        name:'Shirt',
        price:49,
        favorite:false,
        star:4,
        imageUrl:'/assets/me1.jpg',
        tags:['Plen Shirt','Striped Men'],
        origins:'India',
      },
      {
        id:40,
        name:'T-Shirt',
        price:42,
        favorite:false,
        star:5,
        imageUrl:'/assets/me3.jpg',
        tags:['Plen T-shirt','Cotton'],
        origins:'Franse',
      },
      {
        id:41,
        name:'Jeket',
        price:40,
        favorite:false,
        star:4,
        imageUrl:'/assets/me4.jpg',
        tags:['Plen Jeket','Striped Men'],
        origins:'Italy',
      },
      {
        id:42,
        name:'T-shirt',
        price:41,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/me18.jpg',
        tags:['Cotton T-Shirt ','Blend'],
        origins:'London',
      },
      {
        id:43,
        name:'Jeket',
        price:49,
        favorite:false,
        star:5,
        imageUrl:'/assets/me6.jpg',
        tags:['Cotton','Party Wear'],
        origins:'China',
      },
      {
        id:44,
        name:'Jeans',
        price:45,
        favorite:false,
        star:4,
        imageUrl:'/assets/men4.jpg',
        tags:['Slim Jeans','Jeans'],
        origins:'Franse',
      },
      {
        id:45,
        name:'Jeans',
        price:43,
        favorite:false,
        star:3.5,
        imageUrl:'/assets/men3.jpg',
        tags:['Slim Jeans','Party Wear'],
        origins:'USA',
      },
      {
        id:46,
        name:'Shirt',
        price:44,
        favorite:false,
        star:3,
        imageUrl:'/assets/me9.jpg',
        tags:['Cotton Shirt ','Blend'],
        origins:'India',
      },
      {
        id:47,
        name:'Shirt',
        price:39,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/men1.jpg',
        tags:['Casual Shirt','Slim Fit'],
        origins:'Italy',
      },
      {
        id:48,
        name:'T-Shirt',
        price:40,
        favorite:false,
        star:4,
        imageUrl:'/assets/men2.jpg',
        tags:['Cotton','Blend'],
        origins:'Franse',
      }
    
    ]
  }
}

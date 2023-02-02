export class Sale{
    id!:number;
    price!:number;
    canclledprice!:string;
    name!:string;
    favorite:boolean=false;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    origins!:string;
   
  }
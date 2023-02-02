import { Cloths } from "./food";

export class CartItem{
    static food: any;
 
    constructor(food:Cloths){
        this.food=food;
      
    }
    food: Cloths;
    quantity:number = 1;
    get price():number{
        return this.food.price * this.quantity;
    }

}
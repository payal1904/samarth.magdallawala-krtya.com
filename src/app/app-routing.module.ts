import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sample } from 'rxjs';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenComponent } from './men/men.component';
import { MenproComponent } from './menpro/menpro.component';
import { OtherproComponent } from './otherpro/otherpro.component';
import { OthersComponent } from './others/others.component';
import { ProductComponent } from './product/product.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductsaleComponent } from './productsale/productsale.component';
import { SaleComponent } from './sale/sale.component';
import { SaleproductComponent } from './saleproduct/saleproduct.component';
import { SerchingComponent } from './serching/serching.component';
import { TrashComponent } from './trash/trash.component';
import { WomenComponent } from './women/women.component';
import { WomenproComponent } from './womenpro/womenpro.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchItem',component:SerchingComponent},
  {path:'name/:name',component:HomeComponent},
  {path:'food/:id',component:ProductpageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login-page',component:LoginPageComponent},
  {path:'home-page',component:HomeComponent},
  {path:'trash',component:TrashComponent},
 {path:'product',component:ProductComponent},
 {path:'men',component:MenComponent},
 {path:'women',component:WomenComponent},
 {path:'search/:searchItem',component:WomenComponent},
 {path:'cloth/:id',component:WomenproComponent},
 {path:'search/:searchItem',component:MenComponent},
 {path:'mencloth/:id',component:MenproComponent},
 {path:'others',component:OthersComponent},
 {path:'other/:id',component:OtherproComponent},
 {path:'sale',component:SaleComponent},
 {path:'saleproduct',component:ProductsaleComponent},
 {path:'sale/:id',component:SaleproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TrashComponent } from './trash/trash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SerchingComponent } from './serching/serching.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { WomenproComponent } from './womenpro/womenpro.component';
import { MenproComponent } from './menpro/menpro.component';
import { OthersComponent } from './others/others.component';
import { OtherproComponent } from './otherpro/otherpro.component';
import { SaleComponent } from './sale/sale.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule}from '@angular/material/input';

import {ReactiveFormsModule} from '@angular/forms';
import { ProductsaleComponent } from './productsale/productsale.component';
import { SaleproductComponent } from './saleproduct/saleproduct.component';



// import { RatingModule } from 'ng-starrating';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    ProductpageComponent,
    NotFoundComponent,
    LoginPageComponent,
    TrashComponent,
    NavbarComponent,
    SerchingComponent,
    ProductComponent,
    FooterComponent,
    MenComponent,
    WomenComponent,
    WomenproComponent,
    MenproComponent,
    OthersComponent,
    OtherproComponent,
    SaleComponent,
    ProductsaleComponent,
    SaleproductComponent,
    
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RatingModule
    MatButtonModule,
    MatInputModule,MatCardModule
    ,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

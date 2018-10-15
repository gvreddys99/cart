import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule} from "@angular/common/http"
import { Route, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { NoproductfoundComponent } from './shared/components/noproductfound/noproductfound.component';
import { LoaderSpinnerComponent } from './shared/loader-spinner/loader-spinner.component';


import { ProductService } from './shared/services/product.service';

const route: Route[] = [
{path:'index.html', component:ProductslistComponent},
{path:'product/:id',component:ProductdetailsComponent},
{path:'cart',component:CartComponent},
{path:'**',component:ProductslistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductslistComponent,
    CartComponent,
    FooterComponent,
    ProductdetailsComponent,
    NoproductfoundComponent,
    LoaderSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

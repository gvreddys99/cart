import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule} from "@angular/common/http"
import { Route, RouterModule } from "@angular/router";
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { NoproductfoundComponent } from './shared/components/noproductfound/noproductfound.component';
import { LoaderSpinnerComponent } from './shared/loader-spinner/loader-spinner.component';


import { ProductService } from './shared/services/product.service';
import { ThankyouComponent } from './thankyou/thankyou.component';

const route: Route[] = [
{path:'', component:ProductslistComponent},
{path:'cart',component:CartComponent},
{path:'thankyou', component:ThankyouComponent},
{path:'**',component:ProductslistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductslistComponent,
    CartComponent,
    FooterComponent,
    NoproductfoundComponent,
    LoaderSpinnerComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    InfiniteScrollModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

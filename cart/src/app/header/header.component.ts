import { Component, OnInit, Input, OnDestroy, AfterContentInit } from '@angular/core';

import { ProductService } from "./../shared/services/Product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterContentInit {
  private cartCount;
  constructor(private productservice:ProductService) {
    
   }

  ngOnInit() {

  }
  ngOnDestroy() {
     // unsubscribe to ensure no memory leaks
     //this.subscription.unsubscribe();
  }

  ngAfterContentInit(){
    this.productservice.getbasketCount().subscribe( 
      cartCount => { 
        this.cartCount = cartCount;
      });
  }
}

import { Component, OnInit, Input, OnDestroy, AfterContentInit } from '@angular/core';

import { ProductService } from './../shared/services/Product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentInit {
  public cartCount;
  constructor(private productservice: ProductService) {
   }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.productservice.getbasketCount().subscribe(
      count => {
        this.cartCount = count;
      });
  }
}

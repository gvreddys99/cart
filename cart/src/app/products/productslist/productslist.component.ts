import { Component, OnInit, Injectable, Output } from '@angular/core';

import { ProductService } from "./../../shared/services/Product.service";
import { EventEmitter } from 'events';

@Injectable()
@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  private products:any;
  private productList:any;
  private cartCount:number;

  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.products = this.productservice.getProducts();
    this.products.subscribe( product => {
      this.productList = product;
    })
  }
  addProductToCart(product){
    this.productservice.addToCart(product)
  }
}

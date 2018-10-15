import { Component, OnInit, Injectable } from '@angular/core';

import { ProductService } from "./../../shared/services/Product.service";

@Injectable()
@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  private products:any;
  private productList:any;
  private cartCount;
  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.products = this.productservice.getProducts();
    this.products.subscribe( product => {
      this.productList = product;
    })
  }
  addProductToCart(product){
    console.log(product);
    this.productservice.addToCart(product)
    this.cartCount = this.productservice.calculateLocalCartProdCounts();
    console.log(this.cartCount);
  }

}

import { Component, OnInit, Injectable, Output } from '@angular/core';

import { ProductService } from "./../../shared/services/Product.service";

import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

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
  private cartProducts;
  private currentProductQuantity = 0;

  constructor(private productservice:ProductService) {}

  ngOnInit() {
    this.products = this.productservice.getProducts();
    this.products.subscribe( products => {
      this.productList = products;
    })
  }
  addProductToCart(product){
    this.cartProducts = this.productservice.getCartProducts();
    this.cartProducts.map(item => {
      if(item.ProductId == product.ProductId){
        this.currentProductQuantity = item.Quantity;
      }
    })
    this.currentProductQuantity++
    this.productservice.updateCart(product,this.currentProductQuantity)
  }
}

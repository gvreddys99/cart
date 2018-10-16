import { Component, OnInit, Injectable, Output } from '@angular/core';

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
  private cartCount:number;
  private cartProducts;
  private currentProductQuantity = 0;
  private scrollProducts;

  constructor(private productservice:ProductService) { 

  }

  ngOnInit() {
    this.products = this.productservice.getProducts();
    this.products.subscribe( products => {
      this.productList = products;
      this.scrollProducts = this.productList.slice(0,3);
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
  

  //infinite scroll

  onScroll(){
    console.log('scrolling down')
    if(this.scrollProducts.length < this.productList.length){  
      let len = this.scrollProducts.length;

      for(let i = len; i <= len+3; i++){
      this.scrollProducts.push(this.productList[i]);
      }
    }
  }
  onScrollUp(){
    console.log('scrolling up')
  }
 
}
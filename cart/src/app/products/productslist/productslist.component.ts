import { Component, OnInit, Injectable, Output } from '@angular/core';

import { ProductService } from './../../shared/services/product.service';


@Injectable()
@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  private products: any;
  public productList: any;
  private cartCount: number;
  private cartProducts;
  private currentProductQuantity = 0;
  public scrollProducts;

  constructor(private productservice: ProductService) {}

  ngOnInit() {
    this.products = this.productservice.getProducts();
    this.products.subscribe( products => {
      this.productList = products;
      this.scrollProducts = this.productList.slice(0, 3);
    });
  }

  addProductToCart(product) {
    this.cartProducts = this.productservice.getCartProducts();
    this.cartProducts.map(item => {
      if (item.ProductId === product.ProductId) {
        this.currentProductQuantity = item.Quantity;
      }
    });
    this.currentProductQuantity++;
    this.productservice.updateCart(product, this.currentProductQuantity);
  }

  // infinite scroll
  onScroll() {
    if (this.scrollProducts.length < this.productList.length) {
      const len = this.scrollProducts.length;

      for (let i = len; i <= len + 3; i++) {
      this.scrollProducts.push(this.productList[i]);
      }
    }
  }

  onScrollUp() {

  }
}

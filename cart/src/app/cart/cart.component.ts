import { Component, OnInit } from '@angular/core';

import { ProductService } from './../shared/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartProducts;
  public grandTotal;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.cartProducts = this.productService.getCartProducts();
    this.productService.getbasketGrandTotal().subscribe(total => {
      console.log(total);
      this.grandTotal = total;
    });
  }
  removeItemFromCart(product) {
    this.productService.removeCartProduct(product);
    this.cartProducts = this.productService.getCartProducts();
  }
  updateItemFromCart(event, product) {
    const quantity = event.target.value;
    this.productService.updateCart(product, quantity);
    this.cartProducts = this.productService.getCartProducts();
  }

}

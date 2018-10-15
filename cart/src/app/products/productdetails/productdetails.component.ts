import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ProductService } from "./../../shared/services/Product.service";

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  private product;
  private productId;
  private products;
  constructor(private router: ActivatedRoute, private productService:ProductService) { }

  ngOnInit() {
    this.router.params.subscribe( productId => {
      this.productId = productId.id;
    })
    
    this.products = this.productService.getProducts();
    this.products.subscribe( (product,key) => {
      console.log(key);
    })
  }


}

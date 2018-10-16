import { Component, OnInit } from '@angular/core';

import { ProductService } from "./../shared/services/Product.service";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.clearBasket();
    
  }

}

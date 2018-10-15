import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject, Observable  } from 'rxjs';

import { Product } from './../models/product'


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  public selectedProduct : BehaviorSubject<any> = new BehaviorSubject(this.getCartProducts().length);
  Products : Product[]= [];
  
  // NavbarCounts
  navbarCartCount = 0;

  private products:any;
  private product:any;

  constructor(private http:HttpClient) {
  }

  getProducts() {
    return this.http.get("./../../assets/products.json");
  }

  // updateProduct(data: Product) {
  //   this.products.update(data.ProductId, data);
  // }

  // deleteProduct(key: string) {
  //   this.products.remove(key);
  // }

  // /*
  //  ----------  Cart Product Function  ----------

  // Adding new Product to cart db if logged in else localStorage
  
  addToCart(data: Product): void {
    console.log(data);
    let a: Product[];

    a = JSON.parse(localStorage.getItem("avct_item")) || [];

    a.push(data);
    setTimeout(() => {
      localStorage.setItem("avct_item", JSON.stringify(a));
      this.calculateLocalCartProdCounts();
    }, 500);
  }

  // // Removing cart from local
  // removeLocalCartProduct(product: Product) {
  //   const products: Product[] = JSON.parse(localStorage.getItem("avct_item"));

  //   for (let i = 0; i < products.length; i++) {
  //     if (products[i].ProductId === product.ProductId) {
  //       products.splice(i, 1);
  //       break;
  //     }
  //   }
  //   // ReAdding the products after remove
  //   localStorage.setItem("avct_item", JSON.stringify(products));

  //   // this.calculateLocalCartProdCounts();
  // }

  // Fetching Local CartsProducts
  
  getCartProducts(): Product[] {
    const products: Product[] =
      JSON.parse(localStorage.getItem("avct_item")) || [];
      
    return products;
  }
    // returning LocalCarts Product Count
  calculateLocalCartProdCounts() {
    this.selectedProduct.next(this.getCartProducts().length);
  }

  getbasketCount(): Observable<any> {
      return this.selectedProduct.asObservable();
  }
}


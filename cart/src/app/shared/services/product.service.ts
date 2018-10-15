import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"

import { Product } from './../models/product'

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  // NavbarCounts
  navbarCartCount = 0;
  navbarFavProdCount = 0;

  private products:any;
  private product:any;

  constructor(private http:HttpClient) {
    // this.calculateLocalCartProdCounts();
  }

  getProducts() {
    return this.http.get("./../../assets/products.json");
  }

  // getProductById(key: string) {
  //   //this.product = this.getProducts()

  //   //Write logic to filter product;
  //   return this.products;
  // }

  // updateProduct(data: Product) {
  //   this.products.update(data.$key, data);
  // }

  // deleteProduct(key: string) {
  //   this.products.remove(key);
  // }

  // /*
  //  ----------  Cart Product Function  ----------

  // Adding new Product to cart db if logged in else localStorage
  addToCart(data: Product): void {
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
  //     if (products[i].productId === product.productId) {
  //       products.splice(i, 1);
  //       break;
  //     }
  //   }
  //   // ReAdding the products after remove
  //   localStorage.setItem("avct_item", JSON.stringify(products));

  //   this.calculateLocalCartProdCounts();
  // }

  // Fetching Local CartsProducts
  getLocalCartProducts(): Product[] {
    const products: Product[] =
      JSON.parse(localStorage.getItem("avct_item")) || [];

    return products;
  }
    // returning LocalCarts Product Count
  calculateLocalCartProdCounts() {
    this.navbarCartCount = this.getLocalCartProducts().length;
  }
}


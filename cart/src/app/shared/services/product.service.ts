import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject, Observable  } from 'rxjs';
import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  public selectedProduct : BehaviorSubject<any> = new BehaviorSubject(this.getCartProducts().length);
  public grandTotal : BehaviorSubject<any> = new BehaviorSubject(this.getCartGrandTotal());
  Products : Product[]= [];
  private SingleProduct:any;

  constructor(private http:HttpClient) {
  }

  getProducts() {
    return this.http.get("./../../assets/products.json");
  }

  updateCart(data: Product,quantity) {
    let a: Product[];
    a = JSON.parse(localStorage.getItem("avct_item")) || [];
    let flag:boolean = false;
    a.map((item,index) => {
      if(item.ProductId == data.ProductId){
        item.Quantity = quantity;
        item.SubTotal = data.Price * quantity;
        a.splice(index,1,item);
        flag=true;
      }
    })
    if(!flag){
      data.SubTotal = data.Price * data.Quantity;
      a.push(data);
    }
    setTimeout(() => {
      localStorage.setItem("avct_item", JSON.stringify(a));
      this.calculateLocalCartProdCounts();
      this.calculateBasketGrandTotal()
    }, 200);
  }

  // Removing product from cart
  removeCartProduct(product: Product) {
    const products: Products[] = JSON.parse(localStorage.getItem("avct_item"));

    for (let i = 0; i < products.length; i++) {
      if (products[i].ProductId === product.ProductId) {
        products.splice(i, 1);
        break;
      }
    }
    // ReAdding the products after remove
    localStorage.setItem("avct_item", JSON.stringify(products));
    this.calculateLocalCartProdCounts();
    this.calculateBasketGrandTotal()
  }

  // Fetching Local CartsProducts
  getCartProducts(): Products[] {
    const products: Products[] =
    JSON.parse(localStorage.getItem("avct_item")) || [];
    return products;
  }

  getCartGrandTotal(){
    let grandTotal = 0;
    let products = this.getCartProducts();
    products.map((item) => {
      grandTotal += item.SubTotal
    })
     return grandTotal;
  }
  getbasketGrandTotal(): Observable<any> {
      return this.grandTotal.asObservable();
  }
  calculateBasketGrandTotal(){
    this.grandTotal.next(this.getCartGrandTotal());
  }

  // updating basket count
  calculateLocalCartProdCounts() {
    this.selectedProduct.next(this.getCartProducts().length);
  }
  
  //clearing basket
  clearBasket(){
    localStorage.removeItem("avct_item");
    this.calculateLocalCartProdCounts();
  }

  getbasketCount(): Observable<any> {
      return this.selectedProduct.asObservable();

  }
}


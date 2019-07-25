import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';
import { CartComponent } from '../cart/cart.component';
import { ActivatedRoute } from '@angular/router';
export interface PeriodicElement {
  name: string;
  price: number;
  quantity: number;
  total: string;
}
@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.scss']
})
export class OrderProductsComponent implements OnInit {
  activatedRoute: ActivatedRoute;

  totalPrice=0;
  products = [];
  price;//מחיר מוצר אחד
  quantity;//כמות מוצר אחד
  price_to_quantity_product;//מחיר עבור מוצר ספציפי
 // products_in_cart: PeriodicElement[] = [];
 products_in_cart=[];

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.getProducts();
  }

  cart: CartComponent;

  constructor(private productService: ProductsService) {
    this.cart = new CartComponent(this.activatedRoute, productService);
  }
  getProducts(): void {
    this.products = this.productService.findAll();
  }
  //add to cart
  ////////string באות קטנה, ספק אם זה טוב
  add_product_to_cart(id: String): void {
    //this.cart.all_cart(id,1);
    console.log(id)
    this.productService.add_product(this.products_in_cart, id);
    this.price=this.productService.find(id.toString()).price;
    this.quantity=this.productService.find(id.toString()).quantity;
    this.price_to_quantity_product=this.price*this.quantity;
    this.totalPrice=this.totalPrice+ this.price_to_quantity_product;
    console.log(this.totalPrice)
    console.log(this.price)
    console.log(this.price_to_quantity_product)
  }

}

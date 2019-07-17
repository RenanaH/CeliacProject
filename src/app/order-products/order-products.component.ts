import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';
import { CartComponent } from '../cart/cart.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.scss']
})
export class OrderProductsComponent implements OnInit {
  activatedRoute: ActivatedRoute;

  products=[];
  products_in_cart=[];

  ngOnInit(): void {
   // throw new Error("Method not implemented.");
    this.getProducts();
  }
 
cart: CartComponent;

 constructor(private productService :ProductsService)
 {
   this.cart=new CartComponent(this.activatedRoute,productService);
 }
 getProducts(): void {
  this.products = this.productService.findAll();
}
//add to cart
////////string באות קטנה, ספק אם זה טוב
add_product_to_cart(id: String ):void
{
 //this.cart.all_cart(id,1);
this.productService.add_product(this.products_in_cart,id);
}

}

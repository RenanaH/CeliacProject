import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.scss']
})
export class OrderProductsComponent implements OnInit {
  ngOnInit(): void {
   // throw new Error("Method not implemented.");
    this.getProducts();
  }
  products=[];

 constructor(private productService :ProductsService)
 {
   
 }
 
 getProducts(): void {
  this.products = this.productService.getProducts();
}
}

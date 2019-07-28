import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product/Product';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent implements OnInit {
  ngOnInit():void {
    this.getProduct();
  }
  product:Product;

  constructor(private productService :ProductsService) { }

  
  getProduct(): void {
    this.product = this.productService.getProduct();
  }
}

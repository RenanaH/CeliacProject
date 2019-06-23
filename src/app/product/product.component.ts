import { Component, OnInit, Input } from '@angular/core';
import { Product } from './Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  @Input() product: Product;


  constructor() { 
  }

  ngOnInit() {
    
  }

}

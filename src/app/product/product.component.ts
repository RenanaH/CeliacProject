import { Component, OnInit, Input } from '@angular/core';
import { Product } from './Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  @Input() product: Product;
  public should_product = false;
   index=0;

  constructor() { 
  }

  ngOnInit() {
    
  }
  
  Buy()
  {
    this.should_product = true;

  }
plus()
{
  if(this.index<=10)
  {
    this.index++;

  }
}
minus()
{
  this.index--;
}
}

import { Component, OnInit, Input } from '@angular/core';
import { Product } from './Product';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  count = new FormControl('');
  
  @Input() product: Product;
  public should_product = false;
   index=0;

  constructor() { 
    this.count.setValue(this.index);
  }

  ngOnInit() {
    
  }
  
  Buy()
  {
    this.should_product = true;

  }
plus()
{
  if(this.index<10)
  {
    this.index++;
    this.count.setValue(this.index);

  }
}
minus()
{
  if(this.index>1)
  {
  this.index--;
  this.count.setValue(this.index);
  }
}
}

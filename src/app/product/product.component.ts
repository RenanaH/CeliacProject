import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './Product';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';
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
  

  constructor(private productsService: ProductsService) { 
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
  if(this.index>0)
  {
  this.index--;
  this.count.setValue(this.index);
  }
}
//add to cart

////////string באות קטנה, ספק אם זה טוב
  add_product(id_product :string)
  {
    this.productsService.find(id_product);
  }

}

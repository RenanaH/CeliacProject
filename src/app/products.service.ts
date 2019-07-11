import { Injectable } from '@angular/core';
import { Product } from './product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[];

//////למחוק את הפונק הזו, גם בראשי.

  
  getProduct(): Product {
    return new Product("1","df","https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",99,"fff","FFF FFF FF"); 
     
  }
  findAll(): Product[] {
    return this.products;
}


find(id: string): Product {
  return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: string) {
  for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
          return i;
      }
  }
  return -1;
}
  constructor() {
    this.products =[{
      "id":"1",
      "name": "hero Product",
      "image": "https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",
      "price": 99,
      "category":"hhgh",
      "description": "Lorem ipsum dolor sit amet",
    },{
      "id":"2",
      "name": "hero Product",
      "image":"https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",
      "price": 99,
      "category":"hhgh",
      "description": "Lorem ipsum dolor sit amet",
    },{
      "id":"1",
      "name": "hero Product",
      "image": "https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",
      "price": 99,
      "category":"hhgh",
      "description": "Lorem ipsum dolor sit amet",
    },{
      "id":"1",
      "name": "hero Product",
      "image": "https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",
      "price": 99,
      "category":"hhgh",
      "description": "Lorem ipsum dolor sit amet"}
    // },{
    //   "id":1,
    //   "name": "hero Product",
    //   "image": "https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",
    //   "price": 99,
    //   "category":"hhgh",
    //   "description": "Lorem ipsum dolor sit amet",
    // },{
    //   "id":1,
    //   "name": "hero Product",
    //   "image": "https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",
    //   "price": 99,
    //   "category":"hhgh",
    //   "description": "Lorem ipsum dolor sit amet",
    // },{
    //   "id":1,
    //   "name": "hero Product",
    //   "image": "https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",
    //   "price": 99,
    //   "category":"hhgh",
    //   "description": "Lorem ipsum dolor sit amet",
    // }
  ];
   }
}

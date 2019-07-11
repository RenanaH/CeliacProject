import { Injectable } from '@angular/core';
import { Product } from './product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[];



  getProducts(): Product[] {
    return [{
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
  getProduct(): Product {
    return new Product("1","df","https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",99,"fff","FFF FFF FF"); 
     
  }
  findAll(): Product[] {
    return this.products;
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

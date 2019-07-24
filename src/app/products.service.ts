import { Injectable } from '@angular/core';
import { Product } from './product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[];

  getProduct(): Product {
    return new Product("1","df","https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",99,"fff","FFF FFF FF"); 
     
  }
  findAll(): Product[] {
    return this.products;
}
p:Product;
add_new_product(product_list:Product[], id:string)
{
  this.p=this.find(id);
product_list.push((this.p));
}

update_quantity(id: String, quantity: number)
{//מקבלת אי די וכמות ומעדכנת את הכמות של המוצר, קורה בעת לחיצה על הוסף לסל
  this.products[this.getSelectedIndex(id)].quantity=quantity;
}
get_quantity(id: String)
    {
      return this.products[this.getSelectedIndex(id.toString())].quantity;
    }

find(id: string): Product {
  return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: String) {
  for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
          return i;
      }
  }
  return -1;
}
private getSelectedIndexInCart(pro_list:Product[],id: String) {
  for (var i = 0; i < this.products.length; i++) {
      if (pro_list[i].id == id) {
          return i;
      }
  }
  return -1;
}
d:Number=0;
add_product(products_list:Product[],id)
{
  this.d=0;
  for (var i = 0; i < products_list.length; i++) {
    if (products_list[i].id == id) {
     this.d=1;
        break;
    }
}
if(this.d==0)
{
  products_list.push(this.find(id));
} 
}
  constructor() {
    this.products =[{
      "id":"111",
      "name": "hero Product",
      "image": "https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",
      "price": 200,
      "category":"hhgh",
      "description": "Lorem ipsum dolor sit amet",
      "quantity":0
    },{
      "id":"222",
      "name": "hero Product",
      "image":"https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",
      "price": 55,
      "category":"hhgh",
      "description": "Lorem ipsum dolor sit amet",
      "quantity":0
    },{
      "id":"333",
      "name": "hero Product",
      "image": "https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",
      "price": 99,
      "category":"hhgh",
      "description": "Lorem ipsum dolor sit amet",
      "quantity":0
    },{
      "id":"4444",
      "name": "hero Product",
      "image": "https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/FIXED-Writing-on-Plaque-7.jpg",
      "price": 300,
      "category":"hhgh",
      "description": "Lorem ipsum dolor sit amet",
      "quantity":0
  }
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

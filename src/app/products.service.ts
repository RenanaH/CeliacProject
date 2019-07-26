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
 getSelectedIndexInCart(pro_list:Product[],id: String) {
  for (var i = 0; i < this.products.length; i++) {
      if (pro_list[i].id == id) {
          return i;
          console.log(i);
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
      "name": "פיצה ביתית",
      "image": "https://www.celiac.org.il/images/com_yoorecipe/476/cropped-pizzaorna.protected.jpg",
      "price":30,
      "category":"hhgh",
      "description": "פיצה טעימה על בצק קריספי ללא גלוטן",
      "quantity":0
    },{
      "id":"222",
      "name": "לחם בסיסי",
      "image":"https://www.celiac.org.il/images/com_yoorecipe/476/cropped-eyalbread.protected.jpg",
      "price": 17,
      "category":"לחם בסיסי למכונת לחם",
      "description": "לחם עשיר בסיבים תזונתיים בתוספת דגנים וגרעיני חמניה",
      "quantity":0
    },{
      "id":"333",
      "name": "לחמנית ג'בטה",
      "image": "https://www.celiac.org.il/images/com_yoorecipe/476/cropped-gilajebeta.JPG",
      "price": 5,
      "category":"hhgh",
      "description": "לחמניות טריות הישר מהתנור עשויות מקמח תפוח אדמה וטפיוקה",
      "quantity":0
    },{
      "id":"4444",
      "name": "לחמניות פורטוגזיות",
      "image": "https://www.celiac.org.il/images/com_yoorecipe/0/cropped-20160623094453-...................................F.protected.jpg",
      "price": 8,
      "category":"hhgh",
      "description": "לחמניות פורטוגזיות על בסיס חלב וחמאה עם גבינה יוונית קפלוטירי",
      "quantity":0
  },{
    "id":"5555",
    "name": "לחמניות גבינה",
    "image": "https://www.celiac.org.il/images/com_yoorecipe/476/cropped-cheeserollssigalit.JPG",
    "price": 7,
    "category":"hhgh",
    "description": "לחמניות עשירות בגבינה עם שומשום או פרג",
    "quantity":0
}
,{
  "id":"6666",
  "name": "פיתות תנור",
  "image": "https://www.celiac.org.il/images/com_yoorecipe/0/cropped-20160608103701-...........................protected.jpg",
  "price": 10,
  "category":"hhgh",
  "description": "פיתות ביס טבולות בקמח אפויות באח",
  "quantity":0
}
,{
  "id":"777",
  "name": "פשטידת אטריות ופטריות",
  "image": "https://www.celiac.org.il/images/com_yoorecipe/0/cropped-20160126130428-..................................................protected.jpg",
  "price": 20,
  "category":"hhgh",
  "description": "פשטידת אטריות עם פטריות ושום על בסיס שמנת וגבינות",
  "quantity":0
},{
  "id":"888",
  "name": "לחם טחינה וסילאן",
  "image": "https://www.celiac.org.il/images/com_yoorecipe/0/cropped-20160430102227-..................protected.jpg",
  "price": 22,
  "category":"hhgh",
  "description": "לחם מתקתק עם טחינה, סילאן ואגוזים",
  "quantity":0
}
,{
  "id":"999",
  "name": "בורקס",
  "image": "https://www.celiac.org.il/images/com_yoorecipe/476/cropped-burekasayala.JPG",
  "price": 4,
  "category":"hhgh",
  "description": "בורקס בשומשום ביצה וקצאח",
  "quantity":0
}
,{
  "id":"112",
  "name": "בורקס בשר",
  "image": "https://www.celiac.org.il/images/com_yoorecipe/0/cropped-20160128072541-......................protected.jpg",
  "price": 22,
  "category":"hhgh",
  "description": "בורקס במילוי בשר טחון עם ירק קצוץ",
  "quantity":0
}
,{
  "id":"113",
  "name": "חיתוכיות קרקרים",
  "image": "https://www.celiac.org.il/images/com_yoorecipe/0/cropped-20160520061439-.....................................protected.jpg",
  "price": 22,
  "category":"hhgh",
  "description": "לחם ללא סוכר, פחממות וקמח",
  "quantity":0
}
,{
  "id":"114",
  "name": "לחמניות טריות",
  "image": "https://schneider.org.il/_uploads/extraimg/br.jpg",
  "price": 5,
  "category":"hhgh",
  "description": "לחמניות ביתיות הישר מהתנור",
  "quantity":0
}
,{
  "id":"115",
  "name": "לחם כפרי",
  "image": "https://www.היערהשחורגרמניה.com/wp-content/uploads/2017/07/no-gluten-bread-1905736_1920.jpg",
  "price": 22,
  "category":"סגכ",
  "description": "לחם עשיר בסיבים תזונתיים, שקדים ואגוזים",
  "quantity":0
}
,{
  "id":"115",
  "name": "לחם דבש",
  "image": "https://www.assia.co.il/wp-content/uploads/2015/02/Celiac_Bread_no_gluten.jpg",
  "price": 22,
  "category":"סגכ",
  "description": "לחם טרי בציפוי מתקתק של דבש",
  "quantity":0
}
,{
  "id":"115",
  "name": "חלה ללא גלוטן",
  "image": "https://www.goodiz.tv/wp-content/uploads/2015/12/Picture22.jpg",
  "price": 22,
  "category":"סגכ",
  "description": "חלה עשירה",
  "quantity":0
}
,{
  "id":"115",
  "name": "קרוטונים",
  "image": "http://hamishmar.org.il/wp-content/uploads/2014/11/Gluten-free-croutons-191114.jpg",
  "price": 22,
  "category":"סגכ",
  "description": "קרוטונים נטולי גלוטן עשירים בטיבול איטלקי ",
  "quantity":0
}

   
  ];
   }
}

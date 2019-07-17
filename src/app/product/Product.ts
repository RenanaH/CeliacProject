// enum Category {
//     Pasta,
//     Oil,
//     Breads,
// }
export class Product{
    id:String;
    name: String;
    image:String;
    price:Number;
    category:String;
    description:String;
    quantity:number;
  
    constructor( id:String,name: String, image:String,price:Number ,category:String,description:String)
    { 
        this.id=id;
        this. name=name;
        this.image= image;
        this. price=price;
        this.category=category;
        this.description=description;
        this.quantity=0;
    }
    // copy_product(p:Product)
    // { 
    //     this.id=p.id;
    //     this. name=p.name;
    //     this.image= p.image;
    //     this. price=p.price;
    //     this.category=p.category;
    //     this.description=p.description;
    //     this.quantity=0;
    // }

   
}

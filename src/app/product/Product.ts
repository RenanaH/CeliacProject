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
  
    constructor( id:String,name: String, image:String,price:Number ,category:String,description:String)
    { 
        this.id=id;
        this. name=name;
        this.image= image;
        this. price=price;
        this.category=category;
        this.description=description;
    }
}

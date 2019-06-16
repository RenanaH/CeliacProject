import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  id;
  name;
  picture;
  price;
  category;
  description;
  
  constructor() { 
     this.id=1;
    this. name="cook";
    //this. picture="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi-5P-evO7iAhVC1xoKHS8WC2gQjRx6BAgBEAU&url=https%3A%2F%2Fwww.bettycrocker.com%2Frecipes%2Fultimate-chocolate-chip-cookies%2F77c14e03-d8b0-4844-846d-f19304f61c57&psig=AOvVaw1xdqAe0jI5flV9dpdxc5vY&ust=1560790604398292"
   this.picture= "https://www.ucook.cooking/wp-content/uploads/2018/05/Kids-Cooking.jpg"
    this. price=100;
    this.category;
    this.description="new cook with chocolate";
   



  }

  ngOnInit() {
  }

}

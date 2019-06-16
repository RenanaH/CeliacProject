import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-products-old',
  templateUrl: './order-products-old.component.html',
  styleUrls: ['./order-products-old.component.scss']
})
export class OrderProductsOldComponent implements OnInit {
  users = [
    {
      name: 'Lia Lugo',
      avatar: 'svg-11',
      details: 'I love cheese, ...',
      isAdmin: true,
      isCool: false
    },
    {
      name: 'George Duke',
      avatar: 'svg-12',
      details: 'Zombie ipsum ...',
      isAdmin: false,
      isCool: true
    }
    ];
  constructor() { }

  ngOnInit() {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductsOldComponent } from './order-products-old.component';

describe('OrderProductsOldComponent', () => {
  let component: OrderProductsOldComponent;
  let fixture: ComponentFixture<OrderProductsOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderProductsOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProductsOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

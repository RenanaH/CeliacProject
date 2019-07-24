import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCeliacComponent } from './on-celiac.component';

describe('OnCeliacComponent', () => {
  let component: OnCeliacComponent;
  let fixture: ComponentFixture<OnCeliacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnCeliacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnCeliacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

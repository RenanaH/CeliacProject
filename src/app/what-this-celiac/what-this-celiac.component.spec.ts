import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatThisCeliacComponent } from './what-this-celiac.component';

describe('WhatThisCeliacComponent', () => {
  let component: WhatThisCeliacComponent;
  let fixture: ComponentFixture<WhatThisCeliacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatThisCeliacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatThisCeliacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

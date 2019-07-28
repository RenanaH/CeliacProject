import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationProjectComponent } from './navigation-project.component';

describe('NavigationProjectComponent', () => {
  let component: NavigationProjectComponent;
  let fixture: ComponentFixture<NavigationProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

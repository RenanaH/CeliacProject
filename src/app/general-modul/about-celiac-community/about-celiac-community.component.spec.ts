import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCeliacCommunityComponent } from './about-celiac-community.component';

describe('AboutCeliacCommunityComponent', () => {
  let component: AboutCeliacCommunityComponent;
  let fixture: ComponentFixture<AboutCeliacCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCeliacCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCeliacCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

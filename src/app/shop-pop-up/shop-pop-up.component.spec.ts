import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPopUpComponent } from './shop-pop-up.component';

describe('ShopPopUpComponent', () => {
  let component: ShopPopUpComponent;
  let fixture: ComponentFixture<ShopPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

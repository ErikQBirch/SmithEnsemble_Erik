import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCdsInfoComponent } from './buy-cds-info.component';

describe('BuyCdsInfoComponent', () => {
  let component: BuyCdsInfoComponent;
  let fixture: ComponentFixture<BuyCdsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCdsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCdsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

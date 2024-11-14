import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCdsComponent } from './buy-cds.component';

describe('BuyCdsComponent', () => {
  let component: BuyCdsComponent;
  let fixture: ComponentFixture<BuyCdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

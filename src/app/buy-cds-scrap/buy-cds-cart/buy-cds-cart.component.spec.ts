import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCdsCartComponent } from './buy-cds-cart.component';

describe('BuyCdsCartComponent', () => {
  let component: BuyCdsCartComponent;
  let fixture: ComponentFixture<BuyCdsCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCdsCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCdsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

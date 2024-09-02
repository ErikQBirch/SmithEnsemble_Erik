import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmithsixComponent } from './smithsix.component';

describe('SmithsixComponent', () => {
  let component: SmithsixComponent;
  let fixture: ComponentFixture<SmithsixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmithsixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmithsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

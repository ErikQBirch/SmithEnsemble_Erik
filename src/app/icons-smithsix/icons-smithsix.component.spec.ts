import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSmithsixComponent } from './icons-smithsix.component';

describe('IconsSmithsixComponent', () => {
  let component: IconsSmithsixComponent;
  let fixture: ComponentFixture<IconsSmithsixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsSmithsixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSmithsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

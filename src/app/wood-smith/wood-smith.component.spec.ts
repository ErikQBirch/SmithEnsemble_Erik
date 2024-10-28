import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodSmithComponent } from './wood-smith.component';

describe('WoodSmithComponent', () => {
  let component: WoodSmithComponent;
  let fixture: ComponentFixture<WoodSmithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodSmithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodSmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

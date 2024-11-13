import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodsmithComponent } from './woodsmith.component';

describe('WoodsmithComponent', () => {
  let component: WoodsmithComponent;
  let fixture: ComponentFixture<WoodsmithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodsmithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodsmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsWoodsmithComponent } from './icons-woodsmith.component';

describe('IconsWoodsmithComponent', () => {
  let component: IconsWoodsmithComponent;
  let fixture: ComponentFixture<IconsWoodsmithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsWoodsmithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsWoodsmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

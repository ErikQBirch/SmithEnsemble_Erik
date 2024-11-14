import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodsmithlinksComponent } from './woodsmithlinks.component';

describe('WoodsmithlinksComponent', () => {
  let component: WoodsmithlinksComponent;
  let fixture: ComponentFixture<WoodsmithlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodsmithlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodsmithlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

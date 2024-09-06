import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmithsixlinksComponent } from './smithsixlinks.component';

describe('SmithsixlinksComponent', () => {
  let component: SmithsixlinksComponent;
  let fixture: ComponentFixture<SmithsixlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmithsixlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmithsixlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

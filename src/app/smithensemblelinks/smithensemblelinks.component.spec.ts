import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmithensemblelinksComponent } from './smithensemblelinks.component';

describe('SmithensemblelinksComponent', () => {
  let component: SmithensemblelinksComponent;
  let fixture: ComponentFixture<SmithensemblelinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmithensemblelinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmithensemblelinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsembleComponent } from './ensemble.component';

describe('Ensemble', () => {
  let component: EnsembleComponent;
  let fixture: ComponentFixture<EnsembleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsembleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsembleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

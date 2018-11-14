import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionModelComponent } from './terms-and-condition-model.component';

describe('TermsAndConditionModelComponent', () => {
  let component: TermsAndConditionModelComponent;
  let fixture: ComponentFixture<TermsAndConditionModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsAndConditionModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

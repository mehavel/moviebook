import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSeatSeletorModelComponent } from './pre-seat-seletor-model.component';

describe('PreSeatSeletorModelComponent', () => {
  let component: PreSeatSeletorModelComponent;
  let fixture: ComponentFixture<PreSeatSeletorModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreSeatSeletorModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSeatSeletorModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

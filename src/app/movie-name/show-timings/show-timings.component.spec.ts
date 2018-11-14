import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimingsComponent } from './show-timings.component';

describe('ShowTimingsComponent', () => {
  let component: ShowTimingsComponent;
  let fixture: ComponentFixture<ShowTimingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTimingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

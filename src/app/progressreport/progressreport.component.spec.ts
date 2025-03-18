import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressreportComponent } from './progressreport.component';

describe('ProgressreportComponent', () => {
  let component: ProgressreportComponent;
  let fixture: ComponentFixture<ProgressreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressreportComponent]
    });
    fixture = TestBed.createComponent(ProgressreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

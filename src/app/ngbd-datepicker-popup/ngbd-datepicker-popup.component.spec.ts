import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdDatepickerPopupComponent } from './ngbd-datepicker-popup.component';

describe('NgbdDatepickerPopupComponent', () => {
  let component: NgbdDatepickerPopupComponent;
  let fixture: ComponentFixture<NgbdDatepickerPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgbdDatepickerPopupComponent]
    });
    fixture = TestBed.createComponent(NgbdDatepickerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

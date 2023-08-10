import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdatepickerbasicComponent } from './ngdatepickerbasic.component';

describe('NgdatepickerbasicComponent', () => {
  let component: NgdatepickerbasicComponent;
  let fixture: ComponentFixture<NgdatepickerbasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgdatepickerbasicComponent]
    });
    fixture = TestBed.createComponent(NgdatepickerbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

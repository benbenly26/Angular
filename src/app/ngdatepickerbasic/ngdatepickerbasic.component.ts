import {Component} from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbddatepicker-basic',
  templateUrl: './ngdatepickerbasic.component.html',
})
export class NgdatepickerbasicComponent {
  model!: NgbDateStruct;
  date!: { year: number; month: number };

  constructor(private calendar: NgbCalendar) {
    this.model = {year: 0, month: 0, day: 0};
    this.date = {year: 0, month: 0};

  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}

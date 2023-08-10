import {Component} from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {
  value: any;

  searchBtn() {
    console.log('The Searched Application is ' + this.value)
  }
}

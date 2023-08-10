import {Component} from '@angular/core';
import _default from "chart.js/dist/plugins/plugin.tooltip";
import numbers = _default.defaults.animations.numbers;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  number = '7';

  //Search Function
  value: any;

  onSearch() {
    console.log('The Value is ' + this.value)
  }
}

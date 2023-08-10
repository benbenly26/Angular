import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent {

  firstName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  number = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]);
  department = new FormControl('', [Validators.required]);
  rollInfo = new FormControl('', [Validators.required]);
}

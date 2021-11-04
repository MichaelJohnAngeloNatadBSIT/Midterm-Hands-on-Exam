import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    firstName = new FormControl('');
    lastName = new FormControl('');
    email = new FormControl('');
    password = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}

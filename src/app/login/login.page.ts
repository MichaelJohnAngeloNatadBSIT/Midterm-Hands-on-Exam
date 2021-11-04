import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {
  
    email = new FormControl('');
    password= new FormControl('');
  
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }

  logIn(email, password){
    console.log(this.email.value)
    console.log(this.password.value)
    this.router.navigate(['tab3/'+this.email.value]);
  }

}


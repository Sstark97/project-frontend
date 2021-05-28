import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private AuthService :  AuthService, private Router : Router) { }

  ngOnInit(): void {
  }

  submitRegister() {
    this.AuthService.register(this.registerForm.value)
      .then(res => {
        if(res){ 
          this.AuthService.setToken(res.token);
          this.Router.navigateByUrl('/');
        }
        else {
          this.Router.navigateByUrl('/');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}

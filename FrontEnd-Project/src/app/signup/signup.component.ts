import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { SignUpService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public router: Router , public signup: SignUpService) { }
  registerForm: FormGroup ;
  submitted = false;
  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        firstName : new FormControl('', Validators.required),
        lastName : new FormControl('', Validators.required),
        userName : new FormControl('', Validators.required),
        password : new FormControl('', Validators.required)
      }
    );
  }

  onSubmit(registerForm) {
    this.signup.savesignUpdetails(registerForm.value);
    console.log('registration form component - ', registerForm.value);
    this.router.navigate(['/login']);
  }

  get f() { return this.registerForm.controls; }

}

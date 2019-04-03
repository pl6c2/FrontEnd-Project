import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { UserAuthenticationService } from '../services/user-authentication.service';
import {SharedServiceService} from '../services/shared-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup ;
  navBar = false;
  constructor(private router: Router, public userAuth: UserAuthenticationService, public data: SharedServiceService) { }


  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        userName : new FormControl('', Validators.required),
        password : new FormControl('', Validators.required)
      }
    );
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.data.changeMessage(this.loginForm.value.userName);
    this.userAuth.getAuthenticated(this.loginForm.value).subscribe(result => {
         console.log('login check point result - ', result);
         if (result === 'Success') {
           this.navBar = true;
           this.router.navigate(['/home']);
         } else if (result === 'failed') {
            alert('UserName and password does not match');
         } else {
           alert('Try Again');
         }
    });

  }
}

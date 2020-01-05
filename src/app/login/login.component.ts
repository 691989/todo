import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  inValidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection -- Built in in angular

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    //console.log(this.username)
    //console.log(this.password)
    // if (this.username === "dhananjay" && this.password === 'dhananjay') {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.inValidLogin = false

    } else {
      this.inValidLogin = true
    }
  }

}

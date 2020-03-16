import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
import Notiflix from "notiflix-angular";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        Notiflix.Notify.Success('Login successful');
        localStorage.setItem('token', res.token)
        this._router.navigate(['/userlist'])
      },
      
      err => { 
        console.log(err)
        Notiflix.Notify.Failure(err.error)
      }
      
    ) 
  }

}
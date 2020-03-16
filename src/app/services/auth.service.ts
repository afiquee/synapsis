import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://127.0.0.1:3000/user/register"
  private _loginUrl = "http://127.0.0.1:3000/user/login"

  constructor(private http: HttpClient,  private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}

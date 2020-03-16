import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _allUsersUrl = "http://127.0.0.1:3000/user/all"

  constructor(private http: HttpClient,  private _router: Router) { }

  getAllUsers() {
    this.http.post<any>(this._allUsersUrl, { title: 'Angular POST Request Example' }).subscribe(data => {
    return data;
})
  }

  

}

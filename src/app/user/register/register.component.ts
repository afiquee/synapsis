import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  registerUserData = {}

  constructor(private formBuilder: FormBuilder, private _auth: AuthService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          fullName: ['', Validators.required],
          role: ['', Validators.required],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.registerUserData = {
          "username": this.f.username.value,
          "password": this.f.password.value,
          "fullname": this.f.fullName.value,
          "role": this.f.role.value,
          "status": "Active"
      }

      this._auth.registerUser(this.registerUserData)
          .subscribe(
              res => {
                  localStorage.setItem('token', res.token)
              },
              err => console.log(err)
          )
     
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  fb = inject(FormBuilder)
  http = inject(HttpClient)
  loginSvc = inject(LoginService)
  authSvc = inject(AuthService)

  loginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(8)
    ]]
  }, [{

  }]);

  onLoginHandler() {
    console.log('submit')

    const formValue = this.loginForm.value

    console.log(formValue)
    this.loginSvc.submitLogin({
      email: formValue.email ?? '',
      password: formValue.password ?? ''
    }).subscribe(
      (response: any) => {
        console.log('response ', response)

        this.authSvc.setToken(response?.token)
      }
    )
  }

  ngOnInit(): void {
    console.log('login form ', this.loginForm.get('password'))
  }

}

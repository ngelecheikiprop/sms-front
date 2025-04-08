import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  authService = inject(AuthService);
  router = inject(Router);
  res: string = ""

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username && password) {
        this.authService.login(username, password).subscribe(
          (res) => {
            if (res.status === 0){
              localStorage.setItem('access_token', res.token);
              console.log(res);
              this.router.navigate(['/dashboard']);
            }
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }


}
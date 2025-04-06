import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  authService = inject(AuthService);
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
            }
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }

  onLogout(){
    localStorage.removeItem('access_token');
  }
}
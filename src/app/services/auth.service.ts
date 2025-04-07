import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginResponse } from '../model/loginResponse.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = "http://localhost:8080/login";
  constructor(private http: HttpClient) { }
  login (username: string, password: string){
    const body = {username, password };
    const headers = new HttpHeaders()
      .set("Content-Type","application/json");
    return this.http.post<LoginResponse>(this.url, body)
  }
}

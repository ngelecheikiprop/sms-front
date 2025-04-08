import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../model/loginResponse.type';
import { Student } from '../model/student.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  readonly baseUrl = "http://localhost:8080/api/v1/students";//localhost:8080/api/v1/students/count
  url: string = "";

  constructor(private http: HttpClient) { }

  getStudentCount() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('access_token') || ''
    });
    console.log(headers);
    this.url = this.baseUrl + "/count";
    return this.http.get<number>(this.url, { headers });
  }

  getStudents(pageNo: number, pageSize: number): any{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('access_token') || ''
    });
    //this.url = this.baseUrl + `?pageNo=${pageNo}&pageSize=${pageSize}`;
    //return this.http.get<Array<Student>>(this.url, { headers });
    return this.http.get<any>(`${this.baseUrl}?pageNo=${pageNo}&pageSize=${pageSize}`, { headers });
    // students.service.ts
  }
}

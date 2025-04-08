import { Component, inject, OnInit, signal } from '@angular/core';
//import { Student } from '../model/student.type';
import { StudentsService } from '../services/students.service';
import { NgFor } from '@angular/common';


export interface Student {
  id: number;
  firstName:string;
  lastName: string;
  birthDate: string;
  className: string;
  score: number;
  status: number;
  photoPath: string;
}

@Component({
  selector: 'app-reportexport',
  imports: [
    NgFor
  ],
  templateUrl: './reportexport.component.html',
  styleUrl: './reportexport.component.css'
})
export class ReportexportComponent {
  students = signal<Array<Student>>([]);
  studentService = inject(StudentsService);
  datasource: any;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'className', 'score', 'status', 'photoPath'];


  ngOnInit(): void {
      this.studentService.getStudents().subscribe(
        (data)=>{
          this.students.set(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}

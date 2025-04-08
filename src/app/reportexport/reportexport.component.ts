import { Component, inject, OnInit, signal } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { NgFor } from '@angular/common';
import { MenuComponent } from "../components/menu/menu.component";
import { FilterStatusPipe } from '../pipe/filter-status.pipe';

export interface Student {
  id: number;
  firstName: string;
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
    NgFor,
    MenuComponent,
    FilterStatusPipe
  ],
  templateUrl: './reportexport.component.html',
  styleUrl: './reportexport.component.css'
})
export class ReportexportComponent implements OnInit {
deleteStudent(studentId: number) {
  console.log("deleting student:"+ studentId);
  this.studentService.deleteStudent(studentId).subscribe(
    (res)=>{
      console.log(res);
    },
    (err)=>{
      console.error(err);
    }
  );
}
editStudent(studentId: number) {
  console.log("editing student:"+ studentId);
}
viewStudent(StudentId: number) {
  console.log("viewing student : "+ StudentId)
}
  pageNo: number = 0;  
  pageSize: number = 10;  
  currentPage: number = 0; 
  totalPages: number = 1; 
  students = signal<Array<Student>>([]);
  studentService = inject(StudentsService);

  constructor() { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents(this.pageNo, this.pageSize).subscribe(
      (res: any) => {
        console.log(res.content);
        this.students.set(res.content);
        this.totalPages = res.totalPages;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onPageNext(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.pageNo++;
      this.loadStudents();
    }
  }

  onPagePrevious(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.pageNo--;
      this.loadStudents();
    }
  }
}
import { Component, inject, OnInit, signal } from '@angular/core';
import { Student } from '../model/student.type';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from '../services/students.service';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-reportexport',
  imports: [
    MatTable,
    MatHeaderRowDef,
    MatRowDef,
    MatColumnDef
  ],
  templateUrl: './reportexport.component.html',
  styleUrl: './reportexport.component.css'
})
export class ReportexportComponent implements OnInit{
  students = signal<Array<Student>>([]);
  studentService = inject(StudentsService);
  datasource: any;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'className', 'score', 'status', 'photoPath'];


  ngOnInit(): void {
      this.studentService.getStudents().subscribe(
        (data)=>{
         
          this.students.set(data);
          this.datasource.data = new MatTableDataSource<Student>(this.students());
          console.log(this.students())
        },
        (err) => {
          console.log(err);
        }
      );
  }
}

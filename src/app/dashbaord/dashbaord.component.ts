import { Component, OnInit, signal } from '@angular/core';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-dashbaord',
  imports: [],
  templateUrl: './dashbaord.component.html',
  styleUrl: './dashbaord.component.css'
})
export class DashbaordComponent implements OnInit{
  studentCount = signal(0);
  res: any;
  constructor(private studentService: StudentsService){}

  ngOnInit(): void {
      this.studentService.getStudentCount().subscribe((res)=>{
        console.log(this.studentCount);
        this.studentCount.set(res);
      })
  }

  
}
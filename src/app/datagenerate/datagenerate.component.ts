import { Component, inject } from '@angular/core';
import { MenuComponent } from "../components/menu/menu.component";
import { StudentsService } from '../services/students.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datagenerate',
  imports: [MenuComponent, FormsModule],
  templateUrl: './datagenerate.component.html',
  styleUrl: './datagenerate.component.css'
})
export class DatagenerateComponent {
  studentService = inject(StudentsService);
  studentCount: number = 0;

generateStudentData() {
  console.log("generating count for: " + this.studentCount)
  this.studentService.generateStudentData(this.studentCount).subscribe(
    (res) => {
      console.log(res);
    },
    (err)=>{
      console.log(err);
    }
  );

}
}

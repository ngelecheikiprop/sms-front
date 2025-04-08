import { Component, inject } from '@angular/core';
import { MenuComponent } from "../components/menu/menu.component";
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-dataprocess',
  imports: [MenuComponent],
  templateUrl: './dataprocess.component.html',
  styleUrl: './dataprocess.component.css'
})
export class DataprocessComponent {
  studentService = inject(StudentsService);


processData() {
  this.studentService.processStudentData().subscribe(
    (res)=>{
      console.log(res);
    },
    (err)=>{
      console.error(err);
    }
  );

}

}

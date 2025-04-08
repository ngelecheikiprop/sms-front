import { Component, inject } from '@angular/core';
import { MenuComponent } from "../components/menu/menu.component";
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-dataupload',
  imports: [MenuComponent],
  templateUrl: './dataupload.component.html',
  styleUrl: './dataupload.component.css'
})
export class DatauploadComponent {
  studentService = inject(StudentsService);
dataUpload() {
this.studentService.uploadStudentData().subscribe(
  (res)=>{
    console.log(res)
  },
  (err)=>{
    console.error(err);
  }
);
}

}

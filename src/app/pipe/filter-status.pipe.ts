import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../model/student.type';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {
  transform(students: Student[]): Student[] {
    return students.filter(student => student.status === 1);
  }
}

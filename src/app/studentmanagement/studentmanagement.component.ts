import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable } from '@angular/material/table';
import { MenuComponent } from "../components/menu/menu.component";


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

const STUDENT_DATA: Student[] = [
  { 
    id: 1, 
    firstName: 'vhpqhwpu', 
    lastName: 'dpal', 
    birthDate: '2000-01-04T09:50:27.764+00:00', 
    className: 'class3', 
    score: 85, 
    status: 1, 
    photoPath: 'path/to/photo1.jpg' 
  },
  { 
    id: 2, 
    firstName: 'kfs', 
    lastName: 'krkzhmt', 
    birthDate: '2003-08-17T23:46:39.124+00:00', 
    className: 'class4', 
    score: 90, 
    status: 1, 
    photoPath: 'path/to/photo2.jpg' 
  },
  { 
    id: 3, 
    firstName: 'rxjffow', 
    lastName: 'miwdljx', 
    birthDate: '2008-07-10T03:28:56.060+00:00', 
    className: 'class5', 
    score: 88, 
    status: 0, 
    photoPath: 'path/to/photo3.jpg' 
  },
  { 
    id: 4, 
    firstName: 'epnu', 
    lastName: 'ighl', 
    birthDate: '2009-11-19T05:21:27.921+00:00', 
    className: 'class4', 
    score: 92, 
    status: 1, 
    photoPath: 'path/to/photo4.jpg' 
  },
  { 
    id: 5, 
    firstName: 'chwmghrt', 
    lastName: 'xfrhhjte', 
    birthDate: '2002-02-15T05:38:40.470+00:00', 
    className: 'class2', 
    score: 76, 
    status: 0, 
    photoPath: 'path/to/photo5.jpg' 
  },
  { 
    id: 6, 
    firstName: 'qrkia', 
    lastName: 'fabtxmyo', 
    birthDate: '2006-05-29T17:13:37.095+00:00', 
    className: 'class4', 
    score: 81, 
    status: 1, 
    photoPath: 'path/to/photo6.jpg' 
  }
];
@Component({
  selector: 'app-studentmanagement',
  imports: [
    MatTable,
    MatHeaderRowDef,
    MatRowDef,
    MatColumnDef,
    NgFor,
    MenuComponent
],
  templateUrl: './studentmanagement.component.html',
  styleUrl: './studentmanagement.component.css'
})


export class StudentmanagementComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'className', 'score', 'status', 'photoPath'];
  dataSource = STUDENT_DATA;
}

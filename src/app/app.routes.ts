import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path:'login',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./login/login.component').then(
                 (m)=>m.LoginComponent);
        },
    },
    {
        path:'dashboard',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./dashbaord/dashbaord.component').then(
                (m)=>m.DashbaordComponent
            )
        },
        canActivate: [authGuard]
    },
    {
        path:'data-generate',
        pathMatch: 'full',
        loadComponent:  () => {
            return import('./datagenerate/datagenerate.component').then(
                (m)=>m.DatagenerateComponent
            )
        },
        canActivate: [authGuard]
    },
    {
        path:'data-process',
        pathMatch: 'full',
        loadComponent:  () => {
            return import('./dataprocess/dataprocess.component').then(
                (m)=>m.DataprocessComponent
            )
        },
        canActivate: [authGuard]
    },
    {
        path:'data-upload',
        pathMatch: 'full',
        loadComponent:  () => {
            return import('./dataupload/dataupload.component').then(
                (m)=>m.DatauploadComponent
            )
        },
        canActivate: [authGuard]
    },
    {
        path:'report-export',
        pathMatch: 'full',
        loadComponent:  () => {
            return import('./reportexport/reportexport.component').then(
                (m)=>m.ReportexportComponent
            )
        },
        canActivate: [authGuard]
    },
    {
        path:'student-management',
        pathMatch: 'full',
        loadComponent:  () => {
            return import('./studentmanagement/studentmanagement.component').then(
                (m)=>m.StudentmanagementComponent
            )
        },
        canActivate: [authGuard]
    }
];

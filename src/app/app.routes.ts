import { Routes } from '@angular/router';

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
        }
    }
];

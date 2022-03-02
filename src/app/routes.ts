import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ResetPasswordComponent } from './page/reset-password/reset-password.component';
import { UsersComponent } from './page/users/users.component';


export const appRoutes: Routes= [
    {path:"login", component: LoginComponent},
    {path:"reset", component: ResetPasswordComponent},
    {path:"users", component: UsersComponent},
    {path: "**", redirectTo: "login", pathMatch: "full" }
];

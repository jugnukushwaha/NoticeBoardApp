import { StudentDashComponent } from './student/student-dash/student-dash.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {path:"",component:StudentComponent},
  {path:"student",component:StudentComponent},
  {path:"signup",component:SignupComponent},
  {path:"admin",component:AdminComponent},
  {path:"admin/admindash",component:AdmindashComponent,canActivate:[AuthGuardGuard]},
  {path:"student/studentdash",component:StudentDashComponent,canActivate:[AuthGuardGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

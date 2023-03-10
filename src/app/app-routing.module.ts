import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, children: [{path: '', loadChildren:()=>import('./login/login.module').then((m)=>m.LoginModule)}]},
  {path: 'admin', component: AdminComponent, children: [{path: '', loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)}]},
  {path: 'teacher', component: TeacherComponent, children: [{path: '', loadChildren:()=>import('./teacher/teacher.module').then((m)=>m.TeacherModule)}]},
  {path: 'student', component: StudentComponent, children: [{path: '', loadChildren:()=>import('./student/student.module').then((m)=>m.StudentModule)}]},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

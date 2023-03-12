import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentAnswerComponent } from './student-answer/student-answer.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherIdeComponent } from './teacher-ide/teacher-ide.component';


const routes: Routes = [
  {path: 'activities', component: ActivitiesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'teacher-ide', component: TeacherIdeComponent},
  {path: 'student-list', component: StudentListComponent},
  {path: 'student-answer/:id', component: StudentAnswerComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { HomeComponent } from './home/home.component';
import { StudentIdeComponent } from './student-ide/student-ide.component';
import { ViewScoreComponent } from './view-score/view-score.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'student-ide', component: StudentIdeComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'view-score', component: ViewScoreComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

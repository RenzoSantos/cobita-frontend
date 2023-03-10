import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ActivitiesComponent } from './activities/activities.component';
import { TeacherIdeComponent } from './teacher-ide/teacher-ide.component';
import { MaterialModules } from '../materials.module.ts/materials.module';
import { ActivityHandlerComponent } from './activity-handler/activity-handler.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentListComponent,
    ActivitiesComponent,
    TeacherIdeComponent,
    ActivityHandlerComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModules
  ]
})
export class TeacherModule { }

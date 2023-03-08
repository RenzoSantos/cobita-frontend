import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegisterComponent } from './register/register.component';
import { MaterialModules } from '../materials.module.ts/materials.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    RegisterComponent,
    DashboardComponent,
    TeacherComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModules,
  ]
})
export class AdminModule { }

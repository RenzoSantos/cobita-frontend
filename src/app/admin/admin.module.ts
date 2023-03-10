import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegisterComponent } from './register/register.component';
import { MaterialModules } from '../materials.module.ts/materials.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { TeacherCreateComponent } from './teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from './teacher-update/teacher-update.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';


@NgModule({
  declarations: [
    RegisterComponent,
    DashboardComponent,
    TeacherComponent,
    StudentComponent,
    TeacherCreateComponent,
    TeacherUpdateComponent,
    StudentUpdateComponent,
    StudentCreateComponent,
    CreatePostComponent,
    UpdatePostComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModules,
  ]
})
export class AdminModule { }

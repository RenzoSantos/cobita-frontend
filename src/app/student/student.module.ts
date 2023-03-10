import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { StudentIdeComponent } from './student-ide/student-ide.component';
import { MaterialModules } from '../materials.module.ts/materials.module';


@NgModule({
  declarations: [
    HomeComponent,
    ActivityComponent,
    StudentIdeComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModules,
  ]
})
export class StudentModule { }

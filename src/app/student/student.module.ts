import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { StudentIdeComponent } from './student-ide/student-ide.component';
import { MaterialModules } from '../materials.module.ts/materials.module';
import { SubmitActComponent } from './submit-act/submit-act.component';
import { ViewScoreComponent } from './view-score/view-score.component';


@NgModule({
  declarations: [
    HomeComponent,
    ActivityComponent,
    StudentIdeComponent,
    SubmitActComponent,
    ViewScoreComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModules,
  ]
})
export class StudentModule { }

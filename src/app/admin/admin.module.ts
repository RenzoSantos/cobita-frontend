import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegisterComponent } from './register/register.component';
import { MaterialModules } from '../materials.module.ts/materials.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModules,
  ]
})
export class AdminModule { }

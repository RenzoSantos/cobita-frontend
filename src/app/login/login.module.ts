import { NgModule } from '@angular/core';
import { CommonModule,  } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MaterialModules } from '../materials.module.ts/materials.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModules
  ]
})
export class LoginModule { }

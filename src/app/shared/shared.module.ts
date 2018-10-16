import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModulesModule} from './material-modules.module';

@NgModule({
  imports:[
    CommonModule,
    MaterialModulesModule
  ],
  exports:[
    CommonModule,
    MaterialModulesModule
  ]
})
export class SharedModule{}

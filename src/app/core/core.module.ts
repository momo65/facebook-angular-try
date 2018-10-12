import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import {MaterialModulesModule} from '../shared/material-modules.module';

@NgModule({
  declarations:[
    HeaderComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    MaterialModulesModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    AppRoutingModule
  ],
  providers:[
  ]
})
export class CoreModule{}

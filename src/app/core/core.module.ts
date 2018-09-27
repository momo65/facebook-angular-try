import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations:[
    HeaderComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers:[

  ],
  exports:[
    HeaderComponent
  ]
})
exports class CoreModule{}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdsComponent} from './ads.component';
import {AdsRoutingModule} from './ads-routing.module';
import { AdsCreationComponent } from './ads-creation/ads-creation.component';

@NgModule({
  declarations:[
    AdsComponent,
    AdsCreationComponent
  ],
  imports:[
    CommonModule,
    AdsRoutingModule
  ]
})
export class AdsModule{}

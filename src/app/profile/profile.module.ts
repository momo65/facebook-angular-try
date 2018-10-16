import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import {ProfileComponent} from './profile.component';
import {profileReducer} from './store/profile.reducers';
import {ProfileRoutingModule} from './profile-routing.module';

@NgModule({
  declarations:[
    ProfileComponent
  ],
  imports:[
    CommonModule,
    ProfileRoutingModule,
    StoreModule.forFeature('profile',profileReducer)
  ]
})
export class ProfileModule{}

import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {ProfileComponent} from './profile.component';
import {SharedModule} from '../shared/shared.module';
import {profileReducer} from './store/profile.reducers';

@NgModule({
  declarations:[
    ProfileComponent
  ],
  imports:[
    SharedModule,
    StoreModule.forFeature('profile',profileReducer)
  ]
})
export class ProfileModule{}

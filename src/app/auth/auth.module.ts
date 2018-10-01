import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {AuthComponent} from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ModalSigninComponent } from './modal-signin/modal-signin.component';
import { RecentConnectionsComponent } from './recent-connections/recent-connections.component';

@NgModule({
  declarations:[
    AuthComponent,
    SignupComponent,
    SigninComponent,
    ModalSigninComponent,
    RecentConnectionsComponent
  ],
  imports:[
    SharedModule
  ]
})
export class AuthModule{}

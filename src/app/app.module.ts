import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations';// to have no animations loaded.
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModulesModule} from './shared/material-modules.module';
import {reducers} from './store/app.reducers';
import {CoreEffects} from './core/store/core.effects';
import { ProfileComponent } from './profile/profile.component';
import {AuthModule} from './auth/auth.module';
import {ProfileModule} from './profile/profile.module';
import {AuthEffects} from './auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    ProfileModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CoreEffects,AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

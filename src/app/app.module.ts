import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations';// to have no animations loaded.
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModulesModule} from './shared/material-modules.module';
import {reducers} from './store/app.reducers';
import {CoreEffects} from './core/store/core.effects';
import { ProfileComponent } from './profile/profile.component';
import {AuthModule} from './auth/auth.module';
import {AuthEffects} from './auth/store/auth.effects';
import {SharedModule} from './shared/shared.module';
import {NgbModulesModule} from './shared/ngb-modules.module';
import {environment} from '../environments/environment';
import {SearchModule} from './search/search.module';
import {WelcomeModule} from './welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
    SearchModule,
    WelcomeModule,
    NgbModulesModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CoreEffects,AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

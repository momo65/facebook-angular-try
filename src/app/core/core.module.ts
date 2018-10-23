import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';
import {NgbModulesModule} from '../shared/ngb-modules.module';
import { LanguageComponent } from './language/language.component';
import { ConfidentialityComponent } from './confidentiality/confidentiality.component';

@NgModule({
  declarations:[
    HeaderComponent,
    LanguageComponent,
    ConfidentialityComponent
  ],
  imports:[
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModulesModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    AppRoutingModule
  ],
  providers:[
    NgbModal
  ]
})
export class CoreModule{}

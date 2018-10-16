import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations:[
    HeaderComponent
  ],
  imports:[
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
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

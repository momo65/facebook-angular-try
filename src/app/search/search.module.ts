import {NgModule} from '@angular/core';

import {SearchComponent} from './search.component';
import {SharedModule} from '../shared/shared.module';
import {SearchRoutingModule} from './search-routing.module';
import { KeywordsSearchComponent } from './keywords-search/keywords-search.component';

@NgModule({
  declarations:[
    SearchComponent,
    KeywordsSearchComponent
  ],
  imports:[
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule{}

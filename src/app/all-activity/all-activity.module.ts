import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule}from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
//import {FormsModule} from '@angular/forms';

import {AllActivityComponent} from './all-activity.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { HistoryYearsComponent } from './history-years/history-years.component';
import {AllActivityRoutingModule} from './all-activity-routing.module';
import { PersonalHistoryComponent } from './personal-history/personal-history.component';
import {SharedModule} from '../shared/shared.module';
import { ConfirmationModalComponent } from './search-history/confirmation-modal/confirmation-modal.component';
import {NgbModulesModule}from '../shared/ngb-modules.module';
import {allActivityReducer} from './store/all-activity.reducers';
import {AllActivityEffects} from './store/all-activity.effects';

@NgModule({
  declarations:[
    AllActivityComponent,
    FiltersComponent,
    SearchHistoryComponent,
    HistoryYearsComponent,
    PersonalHistoryComponent,
    ConfirmationModalComponent
  ],
  imports:[
    SharedModule,
    AllActivityRoutingModule,
    NgbModulesModule,
    HttpClientModule,
    StoreModule.forFeature('allActivity',allActivityReducer),
    EffectsModule.forFeature([AllActivityEffects])
    //FormsModule
  ]
})
export class AllActivityModule{}

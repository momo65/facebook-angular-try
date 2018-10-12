import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AllActivityComponent} from './all-activity.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { HistoryYearsComponent } from './history-years/history-years.component';

@NgModule({
  declarations:[
    AllActivityComponent,
    FiltersComponent,
    SearchHistoryComponent,
    HistoryYearsComponent
  ],
  imports:[
    CommonModule
  ]
})
export class AllActivityModule{}

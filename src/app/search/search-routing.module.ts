import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {SearchComponent} from './search.component';
import {KeywordsSearchComponent} from './keywords-search/keywords-search.component';


const searchRoutes:Routes=[
  {path:'search',component:SearchComponent,children:[
    {path:'str/:keyWord/keywords_search',component:KeywordsSearchComponent}
  ]}
];

@NgModule({
  imports:[
    RouterModule.forChild(searchRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class SearchRoutingModule{}

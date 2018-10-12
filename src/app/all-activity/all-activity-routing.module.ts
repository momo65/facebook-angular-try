import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AllActivityComponent} from './all-activity.component';

const allActivityRoutes:Routes=[
  {path:'',component:AllActivityComponent}
];

@NgModule({
  imports:[
    RouterModule.forChild(allActivityRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AllActivityRoutingModule{}

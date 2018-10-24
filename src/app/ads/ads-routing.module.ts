import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {AdsComponent} from './ads.component';
import {AdsCreationComponent} from './ads-creation/ads-creation.component';

const adsRoutes:Routes=[
  {path:'',component:AdsComponent,children:[
    {path:'',component:AdsCreationComponent}
  ]}
];

@NgModule({
  imports:[
    RouterModule.forChild(adsRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdsRoutingModule{}

import {NgModule} from '@angular/core';
import {Routes,RouterModule,PreloadAllModules} from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
//import {SearchComponent}from './search/search.component';

const appRoutes:Routes=[
  {path:'',loadChildren:'./welcome/welcome.module#WelcomeModule'},
  {path:'profile',loadChildren:'./profile/profile.module#ProfileModule'},
  {path:':lastName.:firstName.:fromCity/allactivity',loadChildren:
    './all-activity/all-activity.module#AllActivityModule'}
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}

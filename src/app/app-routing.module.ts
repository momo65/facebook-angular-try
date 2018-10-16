import {NgModule} from '@angular/core';
import {Routes,RouterModule,PreloadAllModules} from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';

const appRoutes:Routes=[
  {path:'',component:WelcomeComponent},
  {path:'profile',loadChildren:'./profile/profile.module#ProfileModule'},
  {path:':lastName.:firstName.:fromCity/allactivity',loadChildren:
    './all-activity/all-activity.module#AllActivityModule'}
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules,enableTracing: false})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}

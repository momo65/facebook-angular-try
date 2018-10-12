import {NgModule} from '@angular/core';
import {Routes,RouterModule,PreloadAllModules} from '@angular/router';

const appRoutes:Routes=[
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

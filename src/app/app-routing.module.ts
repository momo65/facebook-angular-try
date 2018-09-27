import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//import {ProfileComponent} from './profile/'

const appRoutes:Routes=[
  //{'profile',component:ProfileComponent}
];

@NgModule({
  declarations:[

  ],
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
exports class AppRoutingModule{}

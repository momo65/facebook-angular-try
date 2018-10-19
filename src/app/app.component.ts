import { Component,OnInit } from '@angular/core';
//import * as firebase from 'firebase';
import {Store} from '@ngrx/store';
import {take} from 'rxjs/operators';

import * as fromApp from './store/app.reducers';
import * as coreActions from './core/store/core.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store:Store<fromApp.AppState>){}

  ngOnInit(){
    /*firebase.initializeApp({
      apiKey: "AIzaSyCfOSBqjnAO45zmzw1_DposuZH0kBDTUx0",
      authDomain: "angularfacebookapp.firebaseapp.com"
    });
    */

    this.store.select('auth').pipe(take(1)).subscribe(
      (authState)=>{
        this.store.dispatch(new coreActions.DoLoadSearches(authState.id));
      }
    );
  }
}

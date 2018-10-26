import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map,switchMap,catchError} from 'rxjs/operators';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import * as _ from "lodash";
import * as fuzzy from 'fuzzy';

import * as searchActions from './search.actions';
import {Source} from '../../shared/source.model';

export class SearchEffects{
  authsRef:AngularFireList<any>=null;

  constructor(private actions$:Actions,public db: AngularFireDatabase){
    this.authsRef=db.list('/auths');
  }

  @Effect()
  doLoadSources$=this.actions.ofType(searchActions.DO_LOAD_SEARCHES).pipe(map(
    (action:searchActions.DoLoadSearches)=>{
      return action.payload;
    }
  ),switchMap(
    (sourceTerm:string)=>{

    }
  ));

  getSources(term:string):Observable<Source[]>{
    return this.authsRef.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }),map(
      (auths) => {
        _.findKey(auths,function(au){return au.authId==id});
        return +key;
      }
    ));
  }
}

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
  pagesRef:AngularFireList<any>=null;
  groupsRef:AngularFireList<any>=null;

  constructor(private actions$:Actions,public db: AngularFireDatabase){
    this.authsRef=db.list('/auths');
    this.pagesRef=db.list('/auths/pages');
    this.groupsRef=db.list('/auths/groups');
  }

  @Effect()
  doLoadSources$=this.actions$.ofType(searchActions.DO_LOAD_SOURCES).pipe(map(
    (action:searchActions.DoLoadSources)=>{
      return action.payload; //the searched term
    }
  ),switchMap(
    (sourceTerm:string)=>{

    }
  ));

  getSources(term:string):Observable<number>{//Source[]
    return this.authsRef.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }),map(
      (auths) => {
        let key=_.findKey(auths,function(au){return au.authId==term});
        return +key;
      }
    ));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/Http';
import {Store} from '@ngrx/store';
import {Actions,Effect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map,switchMap,catchError,withLatestFrom} from 'rxjs/operators';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import * as _ from "lodash";

import * as coreActions from './core.actions';
import {Search} from '../../shared/search.model';
import * as coreHelpers from './core-helpers';
import {Suggestion} from '../../shared/suggestion.model';
import * as fromApp from '../../store/app.reducers';

@Injectable()
export class CoreEffects{
  accountsRef:AngularFireList<any>=null;
  authsRef:AngularFireList<any>=null;
  suggestionsTypes:string[];

  constructor(private actions$:Actions,private httpClient:HttpClient,private store:Store<fromApp.AppState>,
    public db: AngularFireDatabase){
      this.accountsRef=db.list('/accounts');
      this.authsRef=db.list('/auths');
  }

  @Effect()
  doGetAccountNumber$=this.actions$.ofType(coreActions.DO_GET_ACCOUNT_NUMBER).pipe(withLatestFrom(
    this.store.select('auth')
  ),switchMap(
    ([action,authState])=>{
      return this.getAccountNumber(authState.id);
    }
  ),map(
    (accountNumber)=>{
      return new coreActions.SetAccountNumber(accountNumber);
    }
  ),catchError(
    (error,X)=>{
      console.log(error);
      return X;
    }
  ));

  getAccountNumber(id:string):Observable<number>{
    return this.accountsRef.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }),map(
      (accounts) => {
        let key=_.findKey(accounts,function(a){return a.authId==id});
        return +key;
      }
    ));
  }

  @Effect()
  doLoadSearches$=this.actions$.ofType(coreActions.DO_LOAD_SEARCHES).pipe(withLatestFrom(
    this.store.select('auth')
  ),switchMap(
    ([action,authState])=>{
      return this.getSearches(authState.id);
    }
  ),map(
    (searches:Search[])=>{
      console.log(searches);
      return new coreActions.LoadSearches(searches);
    }
  ),catchError(
    (error,X)=>{
      console.log(error);
      return X;
    }
  ));

  getSearches(id:string):Observable<Search[]>{
    return this.authsRef.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }),map(
      (auths) => {
        let auth=_.find(auths,function(au){return au.id==id});
        return auth;
      }
    ),map(
      (auth)=>{
        return _.reverse(_.takeRight(_.values(auth.searches),8));//the last 8 searches ordered by the latest in date
      }
    ));
  }

  @Effect()
  doLoadSuggestions$=this.actions$.ofType(coreActions.DO_LOAD_SUGGESTIONS).pipe(map(
    (action:coreActions.DoLoadSuggestions)=>{
      this.suggestionsTypes=coreHelpers.initializeST();
      return action.payload;
    }
  ),switchMap(
    (searchedTerm)=>{//hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
      return this.httpClient.get<Suggestion[]>("https://angularfacebookapp.firebaseio.com/profiles.json");//add token with AuthInterceptor
    }
  ),map(
    (suggestions)=>{
      /*for(let recipe of recipes){
        if(!recipe['ingredients']){
          recipe['ingredients']=[];
        }
      }*/
      return new coreActions.LoadSuggestions(suggestions);
    }
  ),catchError(
    (error,X)=>{
      console.log(error);
      return X;
    }
  ));
}

import {Injectable} from '@angular/core';
import {Actions,Effect} from '@ngrx/effects';
import {HttpClient,HttpParams} from '@angular/common/http';
import {map,switchMap,catchError} from 'rxjs/operators';

import * as aAActions from './all-activity.actions';

@Injectable()
export class AllActivityEffects{
  constructor(private actions$:Actions,private httpClient:HttpClient){}

  @Effect()
  doDeleteSearches$=this.actions$.ofType(aAActions.DO_DELETE_SEARCHES).pipe(map(
    (action:aAActions.DoDeleteSearches)=>{
      return action.payload;
    }
  ),switchMap(
    (id:string)=>{
      let params = new HttpParams().set('profileId', id);
      return this.httpClient.delete("https://angularfacebookapp.firebaseio.com/searches.json",{params:params});
    }
  ),map(
    (deleteResponse:any)=>{
      console.log("delResp = ",deleteResponse);
      return new aAActions.DeleteSearches();
    }
  ),catchError(
    (error,X)=>{
      console.log(error);
      return X;
    }
  ));
}

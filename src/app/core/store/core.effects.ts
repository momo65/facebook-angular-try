import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/Http';
import {Actions,Effect} from '@ngrx/effects';
import {map,switchMap,catchError} from 'rxjs/operators';

import * as coreActions from './core.actions';
import {Search} from '../../shared/search.model';

@Injectable()
export class CoreEffects{
  constructor(private actions$:Actions,private httpClient:HttpClient){}

  @Effect()
  doLoadSearches$=this.actions$.ofType(coreActions.DO_LOAD_SEARCHES).pipe(map(
    (action:coreActions.DoLoadSearches)=>{
      return action.payload;
    }
  ),switchMap(
    (profileId)=>{
      return this.httpClient.get<Search[]>("https://angularfacebookapp.firebaseio.com/searches.json");//add token with AuthInterceptor
    }
  ),map(
    (searches)=>{
      /*for(let recipe of recipes){
        if(!recipe['ingredients']){
          recipe['ingredients']=[];
        }
      }*/
      return new coreActions.LoadSearches(searches);
    }
  ),catchError(
    (error,X)=>{
      console.log(error);
      return X;
    }
  ));
}

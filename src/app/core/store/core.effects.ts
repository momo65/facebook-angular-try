import {Injectable} from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/Http';
import {Actions,Effect} from '@ngrx/effects';
import {map,switchMap,catchError} from 'rxjs/operators';

import * as coreActions from './core.actions';
import {Search} from '../../shared/search.model';
import * as coreHelpers from './core-helpers';

@Injectable()
export class CoreEffects{
  constructor(private actions$:Actions,private httpClient:HttpClient){}

  suggestionsTypes:string[];

  @Effect()
  doLoadSearches$=this.actions$.ofType(coreActions.DO_LOAD_SEARCHES).pipe(map(
    (action:coreActions.DoLoadSearches)=>{
      return action.payload;
    }
  ),switchMap(
    (profileId)=>{
      console.log(profileId);
      let params = new HttpParams().set('profileId', profileId);
      return this.httpClient.get<Search[]>("https://angularfacebookapp.firebaseio.com/searches.json",{params:params});
      //add token with AuthInterceptor
    }
  ),map(
    (searches:Search[])=>{
      console.log(searches);
      let propsearchesData=Object.keys(searches);
      let searchesDataV=[];
      for(let prop of propsearchesData){
        searchesDataV.push(searches[prop]);
      }
      let searches2:Search[]=[];
      console.log(searchesDataV);
      for(let search of searchesDataV){
        searches2.push(new Search(search.profileId,search.date,search.searchTerm,search.visited));
      }
      console.log(searches2);
      /*for(let recipe of recipes){
        if(!recipe['ingredients']){
          recipe['ingredients']=[];
        }
      }*/
      return new coreActions.LoadSearches(searches2);
    }
  ),catchError(
    (error,X)=>{
      console.log(error);
      return X;
    }
  ));

  @Effect()
  doLoadSuggestions$=this.actions$.ofType(coreActions.DO_LOAD_SUGGESTIONS).pipe(map(
    (action:coreActions.DoLoadSuggestions)=>{
      this.suggestionsTypes=coreHelpers.initializeST();
      return action.payload;
    }
  ),switchMap(
    (searchedTerm)=>{//hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
      return this.httpClient.get<Search[]>("https://angularfacebookapp.firebaseio.com/profiles.json");//add token with AuthInterceptor
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

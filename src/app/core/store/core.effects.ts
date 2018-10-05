import {Injectable} from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/Http';
import {Actions,Effect} from '@ngrx/effects';
import {map,switchMap,catchError} from 'rxjs/operators';

import * as coreActions from './core.actions';
import {Search} from '../../shared/search.model';

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
      let params = new HttpParams().set('profileId', profileId);
      return this.httpClient.get<Search[]>("https://angularfacebookapp.firebaseio.com/searches.json",{params:params});
      //add token with AuthInterceptor
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

  function sortIndexes(a,b){//javascript sort helper function
    return a-b;
  }

  initializeST(){//initialize suggestionsTypes
    let sTs=["profiles","pages","groups","public publications","friends publications","pages publications",
    "groups publications"];
    let indexes:number[];
    for(let i=0;i<5;i++){//5 cauz max of sugestions types that FB display is 5
      let new=false;
      while(new==false){ // this loop to keep getting random numbers until they don't belong to the indexes's values
        new=true;
        let index=Math.floor(Math.random()*sTs.length);
        for(let k=0;k<indexes.length;k++){
          if(indexes[k]==index){
            new=false;
          }
        }
        if(new==true){
          indexes.push(index);
        }
      }
    }
    indexes.sort(sortIndexes);
    console.log(indexes);
    let subSTs=[];
    for(let i=0;i<5;i++){
      subSTs.push(sTs[indexes[i]]);
    }
    return [...subSTs];//to assure immutability
  }

  @Effect()
  doLoadSuggestions$=this.actions$.ofType(coreActions.DO_LOAD_SUGGESTIONS).pipe(map(
    (action:coreActions.DoLoadSuggestions)=>{
      this.suggestionsTypes=this.initializeST();
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

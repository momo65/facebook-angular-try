import {Injectable} from '@angular/core';
import {Actions,Effect} from '@ngrx/effects';
import {HttpClient,HttpParams} from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import * as _ from "lodash";

import * as aAActions from './all-activity.actions';

@Injectable()
export class AllActivityEffects{
  searchesRef:AngularFireList<any>=null;

  constructor(private actions$:Actions,private httpClient:HttpClient,public db: AngularFireDatabase){
    this.searchesRef=db.list('/searches');
  }

  @Effect()
  doDeleteSearches$=this.actions$.ofType(aAActions.DO_DELETE_SEARCHES).pipe(map(
    (action:aAActions.DoDeleteSearches)=>{
      return action.payload;
    }
  ),map(
    (id:string)=>{
      this.deleteSearches("profileId",id);
      /*this.searches.pipe(take(1)).subscribe(
        (searchesArray)=>{
          console.log(searchesArray);
          for(let i=1;i<=searchesArray.length;i++){
            this.searchDoc = this.afs.doc<Search>('searches/'+i);
            this.search = this.searchDoc.valueChanges();
            if(this.search.profileId=="ds.ig@gmail.com"){
              this.searchDoc.delete();
            }
          }
        }
      );*/
      return new aAActions.DeleteSearches();
    }
  ),catchError(
    (error,X)=>{
      console.log(error);
      return X;
    }
  ));

  deleteSearches(propName:string,propValue:string){
    this.searchesRef.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }),map(
      (searches) => {
        let keysD=_.keys(searches);
        console.log(keysD);
        let k=0;
        let x;
        while(k<searches.length){
          x=_.findIndex(searches,function(s){return s[propName]==propValue;},k);//'ds.ig@gmail.com'
          this.db.object('searches/'+keysD[x]).remove();
          k=x+1;
        }
    })).subscribe();
  }
}

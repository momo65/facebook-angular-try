import {Injectable} from '@angular/core';
import {Actions,Effect} from '@ngrx/effects';
import {HttpClient,HttpParams} from '@angular/common/http';
import {map,switchMap,mergeMap,take,catchError} from 'rxjs/operators';
import { AngularFirestore,AngularFirestoreDocument,DocumentReference,
  DocumentChangeType,DocumentData} from '@angular/fire/firestore';
import {SnapshotMetadata} from 'firebase/firestore';
import { Observable } from 'rxjs';

import * as aAActions from './all-activity.actions';

export interface Search{
  date:string;
  profileId:string;
  searchedTerm:string;
  visited:boolean;
}
interface DocumentChangeAction {
  //'added' | 'modified' | 'removed';
  type: DocumentChangeType;
  payload: DocumentChange;
}
interface DocumentChange {
  type: DocumentChangeType;
  doc: DocumentSnapshot;
  oldIndex: number;
  newIndex: number;
}
interface DocumentSnapshot {
  exists: boolean;
  ref: DocumentReference;
  id: string;
  metadata: SnapshotMetadata;
  data(): DocumentData;
  get(fieldPath: string): any;
}

@Injectable()
export class AllActivityEffects{
  private searchDoc: AngularFirestoreDocument<Search>;
  search: Observable<Search>;
  searches: Observable<any[]>;

  constructor(private actions$:Actions,private httpClient:HttpClient,db: AngularFirestore,
    private afs:AngularFirestore){
    this.searches = db.collection('searches').valueChanges();
    console.log(this.searches);
    this.searchDoc = afs.doc<Search>('searches/1');
    this.search = this.searchDoc.valueChanges();
  }

  update(search: Search) {
    this.searchDoc.update(search);
  }

  @Effect()
  doDeleteSearches$=this.actions$.ofType(aAActions.DO_DELETE_SEARCHES).pipe(map(
    (action:aAActions.DoDeleteSearches)=>{
      return action.payload;
    }
  ),map(
    (id:string)=>{
      console.log(this.searches);
      this.searches.pipe(take(1)).subscribe(
        (searchesArray)=>{
          console.log(searchesArray);
          /*for(let i=1;i<=searchesArray.length;i++){
            this.searchDoc = this.afs.doc<Search>('searches/'+i);
            this.search = this.searchDoc.valueChanges();
            if(this.search.profileId=="ds.ig@gmail.com"){
              this.searchDoc.delete();
            }
          }*/
        }
      );
      return new aAActions.DeleteSearches();
    }
  ),catchError(
    (error,X)=>{
      console.log(error);
      return X;
    }
  ));
}

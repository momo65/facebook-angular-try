import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {take} from 'rxjs/operators';

import * as fromAA from '../../store/all-activity.reducers';
import * as aAActions from '../../store/all-activity.actions';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  constructor(private store:Store<fromAA.FeatureState>) { }

  deleteAllSearches(){
    this.store.select('auth').pipe(take(1)).subscribe(
      (authState)=>{
        this.store.dispatch(new aAActions.DoDeleteSearches(authState.id));
      }
    );
  }

  ngOnInit() {
  }

}

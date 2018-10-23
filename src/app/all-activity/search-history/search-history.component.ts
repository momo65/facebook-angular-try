import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';

import {ConfirmationModalComponent}from './confirmation-modal/confirmation-modal.component';
import * as fromAA from '../store/all-activity.reducers';
import * as aAActions from '../store/all-activity.actions';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  effacer:boolean;
  @ViewChild('historySearch') historyS:ElementRef;
  searchResultsTag:boolean;

  constructor(private ngbService:NgbModal,private store:Store<fromAA.FeatureState>) { }

  searchTerm(){
    console.log(this.historyS.nativeElement.value);
    this.store.dispatch(new aAActions.DoSearchInSearches(this.historyS.nativeElement.value));
    this.searchResultsTag=true;
  }

  displayDeleteModal(){
    const modalRef=this.ngbService.open(ConfirmationModalComponent,{size:'sm'});
    modalRef.componentInstance.modalRef=modalRef;
  }

  displaySearchBar(){
    if(this.effacer===true){
      this.effacer=false;
      setTimeout(()=>{
        this.historyS.nativeElement.focus();
      },0);
    }else if(this.historyS.nativeElement.value==''||this.historyS.nativeElement.value==null){
      this.effacer=true;
    }else{//we need to search for the word in this case
      this.searchTerm();
    }
  }

  hideSearchBar(){
    if(this.historyS.nativeElement.value==""||this.historyS.nativeElement.value==null){
      this.effacer=true;
    }
  }

  ngOnInit() {
    this.effacer=true;
    this.searchResultsTag=false;
  }

}

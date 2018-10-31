import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {Source} from '../../../shared/source.model';
import {Group} from '../../../shared/group.model';
import * as fromApp from '../../../store/app.reducers';
import * as searchActions from '../../store/search.actions';

@Component({
  selector: 'app-keywords-search-filters',
  templateUrl: './keywords-search-filters.component.html',
  styleUrls: ['./keywords-search-filters.component.css']
})
export class KeywordsSearchFiltersComponent implements OnInit {
  chooseSourceInp:boolean=false;
  checkedFS:boolean=true;//first source
  checkedSS:boolean;//selected source
  checkedFG:boolean=true;//first group
  checkedSG:boolean;//selected group
  sourceTerm:string;
  showSourcesAuto:boolean;
  chooseGroupInp:boolean=false;
  groupTerm:string;
  showGroupsAuto:boolean;

  constructor(private store:Store<fromApp.AppState>) { }

  addGroup(k:number){
    this.Store.dispatch(new searchActions.SetSelectedGroupIndex(k));
  }

  loadGroups(){
    this.store.dispatch(new searchActions.DoLoadGroups(this.groupTerm));
    this.showGroupsAuto=true;
  }

  unloadGroupsAuto(){
    setTimeout(()=>{
      this.showGroupsAuto=false;
    },280);
  }

  rechargeGroups(){
    if(this.groupTerm!='' && this.groupTerm!=null && this.groupTerm!=undefined){
      this.showGroupsAuto=true;
    }
  }

  displayGInp(){
    this.chooseGroupInp=true;
  }

  addSource(j:number){
    this.Store.dispatch(new searchActions.SetSelectedSourceIndex(j));
  }

  loadSources(){
    this.store.dispatch(new searchActions.DoLoadSources(this.sourceTerm));
    this.showSourcesAuto=true;
  }

  unloadSourcesAuto(){
    setTimeout(()=>{
      this.showSourcesAuto=false;
    },280);
  }

  rechargeSources(){
    if(this.sourceTerm!='' && this.sourceTerm!=null && this.sourceTerm!=undefined){
      this.showSourcesAuto=true;
    }
  }

  displaySInp(){
    this.chooseSourceInp=true;
  }

  ngOnInit() {
  }

}

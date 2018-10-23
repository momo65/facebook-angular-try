import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromApp from '../../store/app.reducers';
import * as coreActions from '../store/core.actions';
import * as fromCore from '../store/core.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm:FormGroup;
  coreState$:Observable<fromCore.State>;
  type:string;//to define which: searches or suggestions we're gonna put in the search input.

  constructor(private router:Router,private store:Store<fromApp.AppState>) { }

  editCurrentSearches(){
    console.log("we r in");
    this.store.select('auth').pipe(take(1)).subscribe(
      (authState)=>{
        this.store.select('profile').pipe(take(1)).subscribe(
          (profileState)=>{
            this.router.navigate([authState.lastName+'.'+authState.firstName+'.'+profileState.fromCity,'allactivity'],
              {queryParams:{privacy_source:"activity_log",log_filter:"search"},fragment:'_'});
          }
        );
      }
    );
  }

  unloadAutocomplete(){
    setTimeout(()=>{
      this.type="unload";
    },300);//0 doesn't work for selecting from autocomplete
  }

  loadSearches(){
    if(this.searchForm.value.searchTerm!="" && this.searchForm.value.searchTerm!=null){
      this.type="suggestions";
    }else{
      this.type="searches";
    }
  }

  searchFor(term:string,k:number){
    let formattedTerm;
    if(term==='' && k===-1){
      formattedTerm=this.searchForm.value.searchTerm.trim().replace(' ','+');
      
    }else{
      formattedTerm=term.trim().replace(' ','+');
    }
    this.router.navigate(['search','str',formattedTerm,'keywords_search']);
  }

  private initForm(){
    this.searchForm=new FormGroup({
      'searchTerm':new FormControl('') //,Validators.required
    });
  }

  ngOnInit() {
    this.initForm();
    this.coreState$=this.store.select('core');
    this.searchForm.get('searchTerm').valueChanges.subscribe(
      (searchT)=>{
        if(searchT=="" || searchT==null){
          this.type="searches";
        }else{
          console.log(searchT);
          this.store.dispatch(new coreActions.DoLoadSuggestions(searchT));
          this.type="suggestions";
        }
      }
    );
  }

}

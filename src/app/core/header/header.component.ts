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

  loadSuggestions(){
    if(this.searchForm.value.searchTerm=="" || this.searchForm.value.searchTerm==null){
      this.type="searches";
    }else{
      console.log(this.searchForm.value.searchTerm);
      this.store.dispatch(new coreActions.DoLoadSuggestions(this.searchForm.value.searchTerm));
      this.type="suggestions";
    }
  }

  unloadAutocomplete(){
    setTimeout(()=>{
      this.type="unload";
    },300);
  }

  loadSearches(){
    if(this.searchForm.value.searchTerm!="" && this.searchForm.value.searchTerm!=null){
      this.type="suggestions";
    }else{
      this.type="searches";
    }
  }

  searchFor(event){
    //this.router.navigate(['profile',this.searchForm.value['searchEntityLabel']]);
  }

  private initForm(){
    this.searchForm=new FormGroup({
      'searchTerm':new FormControl('') //,Validators.required
    });
  }

  ngOnInit() {
    this.initForm();
    this.coreState$=this.store.select('core');
  }

}

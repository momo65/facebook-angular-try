import { Component, OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {take,distinctUntilChanged} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromApp from '../../store/app.reducers';
import * as coreActions from '../store/core.actions';
import * as fromCore from '../store/core.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromProfile from '../../profile/store/profile.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  searchForm:FormGroup;
  coreState$:Observable<fromCore.State>;
  authState$:Observable<fromAuth.State>;
  profileState$:Observable<fromProfile.State>;
  type:string;//to define which: searches or suggestions we're gonna put in the search input.
  //nextActNum:number;
  switchToSuggestions:boolean=false;

  constructor(private router:Router,private store:Store<fromProfile.FeatureState>) {}

  tagForSuggestions(){
    this.switchToSuggestions=true;
  }

  toAds(){
    this.store.select('core').pipe(take(1)).subscribe(
      (coreState)=>{
        this.router.navigate(['adsmanager'],{queryParams:{act:coreState.accountNumber,filter_set:''}});//,'creation'
      }
    );
  }

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
      this.type="suggestions";//maybe call for LoadSuggestions here (after we select a search or a suggestion)
    }else{
      this.type="searches";
    }
  }

  searchFor(term:string,k:number){ // i forgot for what i did put k here ;p
    console.log(term);
    let formattedTerm;
    if(term==='' && k===-1){
      formattedTerm=this.searchForm.value.searchTerm.trim().replace(/\/|\\|%|,|=| /g,
        function(sep){
          if(sep=="/"){return "%2F";}else if(sep=="\\"){return "%5C";}else if(sep=="%"){return "%25";}
          else if(sep==","){return "%2C";}else if(sep=="="){return "%3D";}else if(sep==" "){return "+";}
        });
    }else{
      formattedTerm=term.trim().replace(/\/|\\|%|,|=| /g,
        function(sep){
          if(sep=="/"){return "%2F";}else if(sep=="\\"){return "%5C";}else if(sep=="%"){return "%25";}
          else if(sep==","){return "%2C";}else if(sep=="="){return "%3D";}else if(sep==" "){return "+";}
        });
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
    this.profileState$=this.store.select('profile');
    this.authState$=this.store.select('auth');
    this.coreState$=this.store.select('core');

    this.searchForm.get('searchTerm').valueChanges.pipe(distinctUntilChanged()).subscribe(
      (searchT)=>{
        if(searchT=="" || searchT==null || searchT==undefined){
          this.switchToSuggestions=false;
          this.type="searches";
        }else if(this.switchToSuggestions===true){
          this.store.dispatch(new coreActions.DoLoadSuggestions(searchT));
          this.type="suggestions";
        }
      }
    );
  }

}

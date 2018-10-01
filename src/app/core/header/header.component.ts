import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as coreActions from '../store/core.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm:FormGroup;

  constructor(private router:Router,private store:Store<fromApp.AppState>) { }

  loadSuggestions(){
    //here
  }

  loadSearches(){
    this.store.select('auth').pipe(take(1)).subscribe(
      (authState)=>{
        this.store.dispatch(new coreActions.DoLoadSearches(authState.id));
      }
    );
  }

  searchFor(){
    //this.router.navigate(['profile',this.searchForm.value['searchEntityLabel']]);
  }

  private initForm(){
    this.searchForm=new FormGroup({
      'searchElement':new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
    this.initForm();
  }

}

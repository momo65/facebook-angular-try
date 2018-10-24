import {Action} from '@ngrx/store';

import {Search} from '../../shared/search.model';
import {Suggestion} from '../../shared/suggestion.model';

export const LOAD_SEARCHES="LOAD_SEARCHES";//load them into the state
export const DO_LOAD_SEARCHES="DO_LOAD_SEARCHES";//load them from firebase
export const LOAD_SUGGESTIONS="LOAD_SUGGESTIONS";//same
export const DO_LOAD_SUGGESTIONS="DO_LOAD_SUGGESTIONS";//same
export const SET_ACCOUNT_NUMBER="SET_ACCOUNT_NUMBER";
export const DO_GET_ACCOUNT_NUMBER="DO_GET_ACCOUNT_NUMBER";

export class LoadSearches implements Action{
  readonly type=LOAD_SEARCHES;

  constructor(public payload:Search[]){}
}

export class DoLoadSearches implements Action{
  readonly type=DO_LOAD_SEARCHES;
}

export class LoadSuggestions implements Action{
  readonly type=LOAD_SUGGESTIONS;

  constructor(public payload:Suggestion[]){}
}

export class DoLoadSuggestions implements Action{
  readonly type=DO_LOAD_SUGGESTIONS;

  constructor(public payload:string){}//the searched element's value
}

export class SetAccountNumber implements Action{
  readonly type=SET_ACCOUNT_NUMBER;

  constructor(public payload:number){}
}

export class DoGetAccountNumber implements Action{
  readonly type=DO_GET_ACCOUNT_NUMBER;
}

export type CoreActions=LoadSearches|DoLoadSearches|LoadSuggestions|DoLoadSuggestions|SetAccountNumber|
  DoGetAccountNumber;

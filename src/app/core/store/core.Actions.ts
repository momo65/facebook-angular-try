import {Action} from '@ngrx/store';

import {Search} from '../../shared/search.model';

export const LOAD_SEARCHES="LOAD_SEARCHES";//load them into the state
export const DO_LOAD_SEARCHES="DO_LOAD_SEARCHES";//load them from firebase
export const LOAD_SUGGESTIONS="LOAD_SUGGESTIONS";//same
export const DO_LOAD_SUGGESTIONS="DO_LOAD_SUGGESTIONS";//same

export class LoadSearches implements Action{
  readonly type=LOAD_SEARCHES;

  constructor(public payload:Search[]){}
}

export class DoLoadSearches implements Action{
  readonly type=DO_LOAD_SEARCHES;

  constructor(public payload:string){}//the identifier of the profile
}

export class LoadSuggestions implements Action{
  readonly type=LOAD_SUGGESTIONS;

  constructor(public payload:Suggestion[]){}
}

export class DoLoadSuggestions implements Action{
  readonly type=DO_LOAD_Suggestions;

  constructor(public payload:string){}//the searched element's value
}

export type CoreActions=LoadSearches|DoLoadSearches|LoadSuggestions|DoLoadSuggestions;

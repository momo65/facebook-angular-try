import {Action} from '@ngrx/store';

import {Search} from '../../shared/search.model';

export const LOAD_SEARCHES="LOAD_SEARCHES";
export const DO_LOAD_SEARCHES="DO_LOAD_SEARCHES";

export class LoadSearches implements Action{
  readonly type=LOAD_SEARCHES;

  constructor(public payload:Search[]){}
}

export class DoLoadSearches implements Action{
  readonly type=DO_LOAD_SEARCHES;

  constructor(public payload:string){}//the identifier of the profile
}

export type CoreActions=LoadSearches|DoLoadSearches;

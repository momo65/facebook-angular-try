import {Action} from '@ngrx/store';

export const DELETE_SEARCHES="DELETE_SEARCHES";
export const DO_DELETE_SEARCHES="DO_DELETE_SEARCHES";
export const DO_SEARCH_IN_SEARCHES="DO_SEARCH_IN_SEARCHES";

export class DeleteSearches{
  readonly type="DELETE_SEARCHES";
}

export class DoDeleteSearches{
  readonly type="DO_DELETE_SEARCHES";

  constructor(public payload:string){}//as the id of the current authenticated user
}

export class DoSearchInSearches{
  readonly type="DO_SEARCH_IN_SEARCHES";

  constructor(public payload:string){}//as the word to search
}

export type AAActions=DeleteSearches|DoDeleteSearches|DoSearchInSearches;

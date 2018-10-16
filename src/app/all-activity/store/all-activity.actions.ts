import {Action} from '@ngrx/store';

export const DELETE_SEARCHES="DELETE_SEARCHES";
export const DO_DELETE_SEARCHES="DO_DELETE_SEARCHES";

export class DeleteSearches{
  readonly type="DELETE_SEARCHES";
}

export class DoDeleteSearches{
  readonly type="DO_DELETE_SEARCHES";

  constructor(public payload:string){}//as the id of the current authenticated user
}

export type AAActions=DeleteSearches|DoDeleteSearches;

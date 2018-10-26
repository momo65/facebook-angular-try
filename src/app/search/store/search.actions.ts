import {Action} from '@ngrx/store';

import {Source} from '../../shared/source.model';

export const SET_SOURCE="SET_SOURCE";
export const DO_LOAD_SOURCES="DO_LOAD_SOURCES";

export class SetSource implements Action{
  readonly type=SET_SOURCE;

  constructor(public payload:Source){}
}

export class DoLoadSources implements Action{
  readonly type=DO_LOAD_SOURCES;

  constructor(public payload:string){}//the word to search sources with autocomplete
}

export type SearchActions=SetSource|DoLoadSources;

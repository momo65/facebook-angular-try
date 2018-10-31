import {Action} from '@ngrx/store';

import {Source} from '../../shared/source.model';
import {Group} from '../../shared/group.model';

export const SET_SOURCES="SET_SOURCES";
export const DO_LOAD_SOURCES="DO_LOAD_SOURCES";
export const SET_SELECTED_SOURCE_INDEX="SET_SELECTED_SOURCE_INDEX";
export const SET_GROUPS="SET_GROUPS";
export const DO_LOAD_GROUPS="DO_LOAD_GROUPS";
export const SET_SELECTED_GROUP_INDEX="SET_SELECTED_GROUP_INDEX";

export class SetSources implements Action{
  readonly type=SET_SOURCES;

  constructor(public payload:Source[]){}
}

export class DoLoadSources implements Action{
  readonly type=DO_LOAD_SOURCES;

  constructor(public payload:string){}//the word to search sources with autocomplete
}

export class SetSelectedSourceIndex implements Action{
  readonly type=SET_SELECTED_SOURCE_INDEX;

  constructor(public payload:number){}
}

export class SetGroups implements Action{
  readonly type=SET_GROUPS;

  constructor(public payload:Group[]){}
}

export class DoLoadGroups implements Action{
  readonly type=DO_LOAD_GROUPS;

  constructor(public payload:string){}//the word to search groups with autocomplete
}

export class SetSelectedGroupIndex implements Action{
  readonly type=SET_SELECTED_GROUP_INDEX;

  constructor(public payload:number){}
}

export type SearchActions=SetSources|DoLoadSources|SetSelectedSourceIndex|SetGroups|DoLoadGroups|SetSelectedGroupIndex;

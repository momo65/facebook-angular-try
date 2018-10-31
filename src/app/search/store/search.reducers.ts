import {Source} from '../../shared/source.model';
import {Group} from '../../shared/group.model';
import * as searchActions from './search.actions';

export interface State{
  sources:Source[];
  selectedSourceIndex:number;
  groups:Group[];
  selectedGroupIndex:number;
}

const initialState:State={
  sources:[],
  selectedSourceIndex:null,
  groups:[],
  selectedGroupIndex:null
};

export function searchReducer(state=initialState,action:searchActions.SearchActions){
  switch(action.type){
    case searchActions.SET_SOURCES:
      return{
        ...state,sources:[...action.payload]
      };
    case searchActions.SET_SELECTED_SOURCE_INDEX:
      return{
        ...state,selectedSourceIndex:action.payload
      };
    case searchActions.SET_GROUPS:
      return{
        ...state,groups:[...action.payload]
      };
    case searchActions.SET_SELECTED_GROUP_INDEX:
      return{
        ...state,selectedGroupIndex:action.payload
      };
    default:
      return state;
  }
}

import * as coreActions from './core.actions';
import {Search} from '../../shared/search.model';
import {Suggestion} from '../../shared/suggestion.model';

export interface State{
  searches:Search[],
  suggestions:Suggestion[]
}

const initialState:State={
  searches:[],
  suggestions:[]
};

export function coreReducer(state=initialState,action:coreActions.CoreActions){
  switch(action.type){
    case coreActions.LOAD_SEARCHES:
      return{
        ...state,searches:[...action.payload]
      };
    case coreActions.LOAD_SUGGESTIONS:
      return{
        ...state,suggestions:[...action.payload]
      };
    default:
      return state;
  }
}

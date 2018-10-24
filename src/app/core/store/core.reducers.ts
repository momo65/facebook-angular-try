import * as coreActions from './core.actions';
import {Search} from '../../shared/search.model';
import {Suggestion} from '../../shared/suggestion.model';

export interface State{
  searches:Search[];
  suggestions:Suggestion[];
  accountNumber:number;
}

const initialState:State={
  searches:[], //max length of 8
  suggestions:[],  //max length of 8
  accountNumber:null
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
    case coreActions.SET_ACCOUNT_NUMBER:
      return{
        ...state,accountNumber:action.payload
      };
    default:
      return state;
  }
}

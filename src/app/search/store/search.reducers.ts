import {Source} from '../../shared/source.model';

export interface State{
  source:Source;
}

const initialState:State={
  source:null
};

export function SearchReducer(state=initialState,action:searchActions.SearchActions){
  switch(action.type){
    case searchActions.SET_SOURCE:
      return{
        ...state,source:{...action.payload}
      };
    default:
      return state;
  }
}

import * as aAActions from './all-activity.actions';
import {Search} from '../../shared/search.model';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState{
  allActivity:State;
}

export interface State{
  searches:Search[];
}

const initialState:State={
  searches:[]
}

export function allActivityReducer(state=initialState,action:aAActions.AAActions){
  switch(action.type){
    case aAActions.DELETE_SEARCHES:
      return{
        ...state,searches:[]
      }
    default:
      return state;
  }
}

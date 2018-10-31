import {ActionReducerMap} from '@ngrx/store';

import * as fromCore from '../core/store/core.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import * as fromSearch from '../search/store/search.reducers';

export interface AppState{
  core:fromCore.State;
  auth:fromAuth.State;
  search:fromSearch.State;
}

export const reducers:ActionReducerMap<AppState>={
  core:fromCore.coreReducer,
  auth:fromAuth.authReducer,
  search:fromSearch.searchReducer
};

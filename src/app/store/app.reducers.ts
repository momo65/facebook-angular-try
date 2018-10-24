import {ActionReducerMap} from '@ngrx/store';

import * as fromCore from '../core/store/core.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState{
  core:fromCore.State;
  auth:fromAuth.State;
}

export const reducers:ActionReducerMap<AppState>={
  core:fromCore.coreReducer,
  auth:fromAuth.authReducer
};

import {Action} from '@ngrx/store';

export const PROFILE_ACTION1="PROFILE_ACTION1";

export class ProfileAction1 implements Action{
  readonly type=PROFILE_ACTION1;
}

export type ProfileActions=ProfileAction1;

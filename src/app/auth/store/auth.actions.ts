import {Action} from '@ngrx/store';

export const SIGN_UP="SIGN_UP";
export const SET_ACCOUNT_INFO="SET_ACCOUNT_INFO";
export const SIGN_IN="SIGN_IN";
export const SET_TOKEN="SET_TOKEN";
export const LOGOUT="LOGOUT";
export const DO_SIGN_UP="DO_SIGN_UP";
export const DO_SIGN_IN="DO_SIGN_IN";
export const DO_LOGOUT="DO_LOGOUT";

export class SignUp implements Action{
  readonly type=SIGN_UP;
}

export class SetAccountInfo implements Action{
  readonly type=SET_ACCOUNT_INFO;

  constructor(public payload:{firstName:string,lastName:string,id:string,birthDate:Date,sex:string}){}
}

export class SignIn implements Action{
  readonly type=SIGN_IN;
}

export class SetToken implements Action{
  readonly type=SET_TOKEN;

  constructor(public payload:string){}
}

export class Logout implements Action{
  readonly type=LOGOUT;
}

export class DoSignUp implements Action{
  readonly type=DO_SIGN_UP;

  constructor(public payload:{id:string,password:string}){}
}

export class DoSignIn implements Action{
  readonly type=DO_SIGN_IN;

  constructor(public payload:{id:string,password:string}){}
}

export class DoLogout implements Action{
  readonly type=DO_LOGOUT;
}

export type AuthActions=SignUp|SetAccountInfo|SignIn|SignIn|SetToken|Logout|DoSignUp|DoSignIn|DoLogout;

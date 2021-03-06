import * as authActions from './auth.actions';

export interface State{
  firstName:string;
  lastName:string;
  id:string;
  password:string;
  birthDate:Date;
  sex:string; //'male' or 'female'
  authenticated:boolean;
  token:string;
}

const initialState:State={
  firstName:'mdoei',
  lastName:'oidpgi',
  id:"jf.lh@gmail.com",
  password:null,
  birthDate:null,
  sex:'female',
  authenticated:false,
  token:null
};

export function authReducer(state=initialState,action:authActions.AuthActions){
  switch(action.type){
    case authActions.SIGN_UP:
      return{
        ...state,authenticated:true
      };
    case authActions.SIGN_IN:
      return{
        ...state,authenticated:true
      };
    case authActions.SET_ACCOUNT_INFO:
      return{
        ...state,firstName:action.payload.firstName,lastName:action.payload.lastName,id:action.payload.id,
        birthDate:{...action.payload.birthDate},sex:action.payload.sex
      };
    case authActions.SET_TOKEN:
      return{
        ...state,token:action.payload
      };
    case authActions.LOGOUT:
      return{
        ...state,authenticated:false,token:null
      };
    default:
      return state;
  }

}

import * as authActions from './auth.actions';

export interface State{
  firstName:string,
  lastName:string,
  id:string,
  password:string,
  birthDate:Date,
  sex:string, //'man' or 'woman'
  authenticated:boolean,
  token:string
}

const initialState:State={
  firstName:'momo',
  lastName:'edsa77a77',
  id:"ss.dd@gmail.com",
  password:null,
  birthDate:null,
  sex:null,
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

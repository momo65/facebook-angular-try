import * as profileActions from './profile.actions';

export interface State{
  idProfile:string,
  fromCity:string,//the city where a person's from
  liveIn:string,
  highSchool:string,
  college:string,
  work:string,
  intro:string,
  ALaUnePictures:string[]
}

const initialState:State={
  idProfile:'ss.dd@gmail.com',
  fromCity:'Tunis',
  liveIn:'',
  highSchool:'',
  college:'',
  work:'',
  intro:'',
  ALaUnePictures:[]
};

export function profileReducer(state=initialState,action:profileActions.ProfileActions){
    /*switch(action.type){

      default:*/
        return state;
    //}
}

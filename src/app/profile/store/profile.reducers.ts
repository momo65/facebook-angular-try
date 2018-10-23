import * as profileActions from './profile.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState{
  profile:State;
}

export interface State{
  fromCity:string;//the city where a person's from
  liveIn:string;
  highSchool:string;
  college:string;
  work:string;
  intro:string;
  profilePicture:string;
  aLaUnePictures:string[];
}

const initialState:State={
  fromCity:'Tunis',
  liveIn:'',
  highSchool:'',
  college:'',
  work:'',
  intro:'',
  profilePicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJJrY8DUbvIbqoOaieF0HmcaeRk659E85dcqFSQoaHgk7p06F",
  aLaUnePictures:[]
};

export function profileReducer(state=initialState,action:profileActions.ProfileActions){
    /*switch(action.type){

      default:*/
        return state;
    //}
}

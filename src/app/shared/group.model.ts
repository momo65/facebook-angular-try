import {Liker} from './liker.model';
import {Member} from './member.model';

export class Group{
  confidentiality:string;
  creationDate:Date;
  groupName:string;
  likers:Liker[];
  members:Member[];
  profilePhoto:string;
  shortcuts:boolean;//put into shortcuts or not
  userRole:string;
}

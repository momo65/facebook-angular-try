export class Suggestion{
  profileId:string;//need name of the element & link to it ( its id)
  label:string;
  type:string;

  constructor(pI:string,l:string,t:string){
    this.profileId=pI;
    this.label=l;
    this.type=t;
  }
}

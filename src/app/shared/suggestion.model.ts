export class Suggestion{
  profileId:string;//need name of the element & link to it ( its id)
  word:string;
  type:string;

  constructor(pI:string,w:string,t:string){
    this.profileId=pI;
    this.word=w;
    this.type=t;
  }
}

export class Search{
  profileId:string;//whose research is this
  date:Date;//mois et année en haut, si mois pas de search on mentionne celà, il faut date et heure (hh:mm)
  researchedTerm:string;
  visited:boolean;

  constructor(pI:string,d:Date,rT:string,v:boolean){
    this.profileId=pI;
    this.date=d;
    this.researchedTerm=rT;
    this.visited=v;
  }
}

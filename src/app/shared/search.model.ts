export class Search{
  ref:string;
  profileId:string;//whose research is this
  date:Date;//mois et année en haut, si mois pas de search on mentionne celà, il faut date et heure (hh:mm)
  searchTerm:string;
  visited:boolean;

  constructor(r:string,pI:string,d:string,sT:string,v:boolean){
    this.ref=r;
    this.profileId=pI;
    this.date=new Date(d);
    this.searchTerm=sT;
    this.visited=v;
  }
}

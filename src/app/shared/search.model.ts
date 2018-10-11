export class Search{
  profileId:string;//whose research is this
  date:Date;//mois et année en haut, si mois pas de search on mentionne celà, il faut date et heure (hh:mm)
  searchTerm:string;
  visited:boolean;

  constructor(pI:string,d:string,sT:string,v:boolean){
    this.profileId=pI;
    this.date=new Date(d);
    this.searchTerm=sT;
    this.visited=v;
  }
}

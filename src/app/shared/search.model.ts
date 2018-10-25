export class Search{
  date:Date;//mois et année en haut, si mois pas de search on mentionne celà, il faut date et heure (hh:mm)
  searchTerm:string;
  visited:boolean;

  constructor(d:string,sT:string,v:boolean){
    this.date=new Date(d);
    this.searchTerm=sT;
    this.visited=v;
  }
}

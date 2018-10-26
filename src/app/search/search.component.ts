import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyWords:string;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.keyWords=params['keyWords'];
      }
    );
  }

}

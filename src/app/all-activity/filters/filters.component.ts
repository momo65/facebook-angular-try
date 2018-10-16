import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  privacy_source:string;
  log_filter:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params:Params)=>{
        this.privacy_source=params['privacy_source'];
        this.log_filter=params['log_filter'];
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-all-activity',
  templateUrl: './all-activity.component.html',
  styleUrls: ['./all-activity.component.css']
})
export class AllActivityComponent implements OnInit {
  privacySource:string;
  logFilter:string;
  hash:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params:Params)=>{
        this.privacySource=params["privacy_source"];
        this.logFilter=params["log_filter"];
      }
    );
    this.route.fragment.subscribe(
      (fragment:string)=>{
        this.hash=fragment;
      }
    )
  }

}

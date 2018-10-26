import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
  selector: 'app-keywords-search',
  templateUrl: './keywords-search.component.html',
  styleUrls: ['./keywords-search.component.css']
})
export class KeywordsSearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
  }

}

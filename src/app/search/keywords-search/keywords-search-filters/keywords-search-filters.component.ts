import { Component, OnInit } from '@angular/core';
import {Source} from '../../../shared/source.model';

@Component({
  selector: 'app-keywords-search-filters',
  templateUrl: './keywords-search-filters.component.html',
  styleUrls: ['./keywords-search-filters.component.css']
})
export class KeywordsSearchFiltersComponent implements OnInit {
  chooseSourceInp:boolean=false;
  selectedSource:Source;

  constructor() { }

  ngOnInit() {
  }

}

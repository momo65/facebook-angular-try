import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ConfirmationModalComponent}from './confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  effacer:boolean;
  @ViewChild('historySearch') historyS:ElementRef;

  constructor(private ngbService:NgbModal) { }

  displayDeleteModal(){
    this.ngbService.open(ConfirmationModalComponent,{size:'sm'});
  }

  displaySearchBar(){
    if(this.effacer===true){
      this.effacer=false;
      this.historyS.nativeElement.focus();
    }else if(this.historyS.nativeElement.value==''||this.historyS.nativeElement.value==null){
      this.effacer=true;
    }else{//we need to search for the word in this case
      this.searchTerm();
    }
  }

  hideSearchBar(){
    if(this.historyS.nativeElement.value==""||this.historyS.nativeElement.value==null){
      this.effacer=true;
    }
  }

  searchTerm(){
    console.log(this.historyS.nativeElement.value); //here next
  }

  ngOnInit() {
    this.effacer=true;
  }

}

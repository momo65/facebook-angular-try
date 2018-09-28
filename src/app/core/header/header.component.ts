import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm:FormGroup;

  constructor(private router:Router) { }

  searchEntity(){
    this.router.navigate(['profile',this.searchForm.value['searchEntityLabel']]);
  }

  private initForm(){
    this.searchForm=new FormGroup({
      'searchEntityLabel':new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
    this.initForm();
  }

}

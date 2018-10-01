import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCfOSBqjnAO45zmzw1_DposuZH0kBDTUx0",
      authDomain: "angularfacebookapp.firebaseapp.com"
    });
  }
}

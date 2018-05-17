import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBrS8yTy318ilHCUt6n6caDQI0K71OQeE8',
      authDomain: 'uprj-e3038.firebaseapp.com',
    });
  }
  onNavigate(feature) {
    this.loadedFeature = feature;
  }

}

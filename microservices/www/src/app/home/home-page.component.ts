import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

})
export class HomePageComponent {
  
  constructor(private auth: AngularFireAuth) {}

  getName() {
    if(this.auth.auth.currentUser !== null)
      return this.auth.auth.currentUser.displayName;
    
    return 'Anonymous';
  }
}

import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';
import { Listing } from 'app/module1/listing';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-module-2-page',
  templateUrl: './module-2-page.component.html',
  styleUrls: ['./module-2-page.component.css'],

})
export class Module2PageComponent {

  entries: Listing[];

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
  
    let itemChange = db.object('item').valueChanges();

    //Update every 2 seconds
    let that = this;
    setInterval(function update() {
      itemChange.subscribe(data => {
        that.entries = new Array();
        for (let item in data) {
          that.entries.push(data[item]);
        }
        // console.log(data);
      });
      return update;
    }, 2000);

  }

  delete(listing: Listing) {
    console.log('delete: ');
    console.log(listing);
    this.db.object('item/' + listing.id).remove();
  }

  getName() {
    if (this.auth.auth.currentUser !== null)
      return this.auth.auth.currentUser.displayName;

    return 'Anonymous';
  }
}

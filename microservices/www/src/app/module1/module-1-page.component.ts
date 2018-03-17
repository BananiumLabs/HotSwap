import { Component, EventEmitter } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { MaterializeAction } from 'angular2-materialize';
import { Listing } from 'app/module1/listing';
import { MaterializeModule } from 'angular2-materialize';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-module-1-page',
  templateUrl: './module-1-page.component.html',
  styleUrls: ['./module-1-page.component.css'],

})
export class Module1PageComponent {

  entries: any;
  currListing: Listing = new Listing();
  percentage: number = 0;
  search: string = "";

  modalActions = new EventEmitter<string | MaterializeAction>();

  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  imageURL: Observable<string>;
  constructor(private storage: AngularFireStorage, db: AngularFireDatabase, private auth: AngularFireAuth) {
    this.itemRef = db.object('item/' + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    }));
    this.item = this.itemRef.valueChanges();
    let itemChange = db.object('item').valueChanges();

    //Update every 2 seconds
    let that = this;
      setInterval(function update() {
        itemChange.subscribe(data => {
          that.entries = new Array();
          for(let item in data)
            that.entries.push(data[item]);
          // console.log(data);
        });
        return update;
      }, 2000);

  }

  openModal() {
    // populate currListing
    this.currListing.authorid = this.auth.auth.currentUser.displayName;
    this.currListing.authoremail = this.auth.auth.currentUser.email;
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

  saveListing(event) {
    var date = new Date();
    this.currListing.listDate = date.toDateString() + ' ' + date.getHours() + ':' + date.getMinutes();
    console.log('Saving Object: ');
    console.log(this.currListing);
    this.itemRef.set(this.currListing);
  }

  fileChange(event) {
    console.log('Upload Started!');
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const filePath = event.target.files[0].name;
    const task = this.storage.upload(filePath, file);
    // observe percentage changes
    task.percentageChanges().subscribe(data => {
      this.percentage = data;
    })

    // get notified when the download URL is available
    // console.log(task.downloadURL());
    task.downloadURL().subscribe(data => {
      this.currListing.imageRef = data;
      console.log(data);
    });
  }
}

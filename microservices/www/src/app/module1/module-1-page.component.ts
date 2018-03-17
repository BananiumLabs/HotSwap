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

  entries: Listing[];
  currListing: Listing = new Listing();


  modalActions = new EventEmitter<string | MaterializeAction>();

  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  imageURL: Observable<string>;
  constructor(private storage: AngularFireStorage, db: AngularFireDatabase, private auth: AngularFireAuth) {
    this.itemRef = db.object('item');
    this.item = this.itemRef.valueChanges();
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

  add(item: string) {
    // this.entries.push(item);
  }
  saveListing(event) {
    console.log('Saving Object: ' + this.currListing);
    this.itemRef.set(this.currListing);

  }
  fileChange(event) {
    console.log('Upload Started!');
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const filePath = event.target.files[0].name;
    const task = this.storage.upload(filePath, file);
    // observe percentage changes
    console.log(task.percentageChanges());
    // get notified when the download URL is available
    // console.log(task.downloadURL());
    task.downloadURL().subscribe(data => {
      this.currListing.imageRef = data;
      console.log(data);
    });
  }
}

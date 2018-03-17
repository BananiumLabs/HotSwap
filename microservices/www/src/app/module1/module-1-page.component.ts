import { Component, EventEmitter } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { MaterializeAction } from 'angular2-materialize';
import { MaterializeModule } from 'angular2-materialize';


@Component({
  selector: 'app-module-1-page',
  templateUrl: './module-1-page.component.html',
  styleUrls: ['./module-1-page.component.css'],

})
export class Module1PageComponent {
  entries = ['test', 'testing', 'testing123'];

  modalActions = new EventEmitter<string | MaterializeAction>();

  constructor(private storage: AngularFireStorage) {

  }

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

  add(item: string) {
    this.entries.push(item);
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
    console.log(task.downloadURL());
  }
}

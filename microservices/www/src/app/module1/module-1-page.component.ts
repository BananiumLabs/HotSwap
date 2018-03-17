import { Component, EventEmitter } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import { MaterializeAction } from 'angular2-materialize';
import { MaterializeModule } from "angular2-materialize";


@Component({
  selector: 'app-module-1-page',
  templateUrl: './module-1-page.component.html',
  styleUrls: ['./module-1-page.component.css'],

})
export class Module1PageComponent {
  entries = ['test','testing','testing123'];

  modalActions = new EventEmitter<string | MaterializeAction>();

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  add(item:string) {
    this.entries.push(item);
  }
}

import {Component} from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import {Router} from "@angular/router";
import {MaterializeModule} from "angular2-materialize";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private afAuth: AngularFireAuth) {}

    login() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        console.log(this.afAuth.auth.currentUser);
    }
    logout() {
        this.afAuth.auth.signOut();
    }
    isLoggedIn(): boolean {
        if(this.afAuth.auth.currentUser !== undefined && this.afAuth.auth.currentUser !== null)
            return !this.afAuth.auth.currentUser.isAnonymous;
        
        return false;
    }
}

// npm packages: DO NOT PUT ANY HERE UNLESS THEY ARE USED BY EVERY SINGLE PAGE!
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import {HttpModule, JsonpModule, Jsonp, Response} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {NbThemeModule} from '@nebular/theme';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';


// Put your module routes here
const routes: Routes = [
    { path: '', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'module1', loadChildren: 'app/module1/one.module#ModuleOne' },
    { path: 'module2', loadChildren: 'app/module2/two.module#ModuleTwo' },
    { path: 'module3', loadChildren: 'app/module3/three.module#ModuleThree' }
]

// Don't forget to import everything!
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AlertModule.forRoot(),
        RouterModule.forRoot(routes),
        MaterializeModule,
        JsonpModule,
        HttpModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule, // imports firebase/storage only needed for storage features
        AngularFireDatabaseModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbLayoutModule,
        NbSidebarModule,
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [HttpClientModule, NbSidebarService]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from "angular2-materialize";
import {Module1PageComponent} from 'app/module1/module-1-page.component';

@NgModule({
    declarations: [
        Module1PageComponent
    ],
    imports: [
        CommonModule,
        MaterializeModule,
        RouterModule.forChild([
            { path: '', component: Module1PageComponent },
        ]),
    ],
    exports: [
        RouterModule
    ],
    
})
export class ModuleOne {
}
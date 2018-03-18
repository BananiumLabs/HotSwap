import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Module3PageComponent } from 'app/module3/module-3-page.component';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

@NgModule({
    declarations: [
        Module3PageComponent
    ],
    imports: [
        CommonModule,
        MaterializeModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: Module3PageComponent },
        ]),
    ],
    exports: [
        RouterModule
    ]
})
export class ModuleThree {
}
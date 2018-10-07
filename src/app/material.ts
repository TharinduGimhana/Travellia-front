
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
// For Cascading Modal only

// MDB Angular Free
import { ModalModule, InputsModule } from 'angular-bootstrap-md'
@NgModule({
    declarations: [],
    imports: [

        WavesModule,
        ButtonsModule,
        ModalModule.forRoot(),
        InputsModule,
        NgbModule.forRoot(),
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule

    ],
    exports: [
        MDBBootstrapModule,
        WavesModule,
        ButtonsModule,
        ModalModule,
        InputsModule,
        NgbModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule

    ],


})

export class Materials { }
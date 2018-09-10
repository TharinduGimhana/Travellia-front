
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
    declarations:[],
    imports:[
       
        WavesModule,
        ButtonsModule,
        NgbModule.forRoot()
       
      
    ],
    exports:[
        MDBBootstrapModule,
        WavesModule,
        ButtonsModule,
        NgbModule
    
    ]
})

export class Materials{}
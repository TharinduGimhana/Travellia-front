import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Materials } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    Materials,
   
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

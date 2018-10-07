import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Materials } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HotellistComponent } from './hotellist/hotellist.component';
import { HotelComponent } from './hotel/hotel.component';
import { DestinationComponent } from './destination/destination.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    HotellistComponent,
    HotelComponent,
    DestinationComponent,
 
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    Materials,
    HttpClientModule
   
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

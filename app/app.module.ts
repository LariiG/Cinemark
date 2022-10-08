import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import {HttpClientModule} from '@angular/common/http';
import { ListEventsComponent } from './list-events/list-events.component';
import { EventComponent } from './event/event.component';
import { FinishCadasterComponent } from './finish-cadaster/finish-cadaster.component';
import { CadasterFinishedComponent } from './cadaster-finished/cadaster-finished.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEventsComponent,
    EventComponent,
    FinishCadasterComponent,
    CadasterFinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

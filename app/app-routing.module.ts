import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListEventsComponent} from "./list-events/list-events.component";
import {EventComponent} from "./event/event.component";
import {FinishCadasterComponent} from "./finish-cadaster/finish-cadaster.component";
import {CadasterFinishedComponent} from "./cadaster-finished/cadaster-finished.component";

const routes: Routes = [
  { path: 'event', component: ListEventsComponent },
  { path: 'event/:id', component: EventComponent },
  { path: 'event/:id/finish-cadaster', component: FinishCadasterComponent },
  { path: 'event/:id/finish-cadaster/cadaster-finished', component: CadasterFinishedComponent },
  { path: '', redirectTo: 'event', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

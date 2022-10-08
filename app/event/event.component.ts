import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventsService } from '../../services/events.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  // @ts-ignore
  public eventId: string;
  event: any;

  ngOnInit() {
    this.getEventById();
  }

  constructor(route: ActivatedRoute, private eventsService: EventsService, private _location: Location) {
    route.params.subscribe((params) => {
      this.eventId = params["id"];
      console.log(this.eventId);
    });
  }

  getEventById() {
    this.eventsService.getEventsById(this.eventId).subscribe((event) => {
        this.event = event;
        console.log(this.event);
    }
    )
  }

  backClicked() {
    this._location.back();
  }
}

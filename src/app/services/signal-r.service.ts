import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';
import { Subject } from 'rxjs/Subject';
import { ChannelEvent } from './../models/channel-event';

@Injectable()
export class SignalRService {

  public _HubConnection: HubConnection;
  public EventWatcher: Subject<ChannelEvent> = new Subject<ChannelEvent>();


  constructor() {
    this._HubConnection = new HubConnection('http://localhost:63353/GameHub');
    this._HubConnection.start()
    .then(() => {
      this._HubConnection.on('joinGame', (event: ChannelEvent) => {
        this.EventWatcher.next(event);
      });
      console.log('Connection Started!');
      // Continue populating with Hub Calls
    })
    .catch((error) => {
      console.log('Yeah...something went wrong. Connection NOT established');
    });
   }

   // Need a Generate Group Function to Pass to the JoinGame HUB Method

}

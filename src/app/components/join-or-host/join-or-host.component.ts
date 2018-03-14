import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';
import { filter } from 'rxjs/operators';
import { ChannelEvent } from './../../models/channel-event';
@Component({
  selector: 'app-join-or-host',
  templateUrl: './join-or-host.component.html',
  styleUrls: ['./join-or-host.component.css']
})
export class JoinOrHostComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) {
    _SignalRService.EventWatcher.pipe(filter(data => data.Name === 'join')).subscribe();
   }

  ngOnInit() {
  }

  JoinGame(data): void {
    console.log('Publishing ChannelEvent....');
    this._SignalRService._HubConnection.invoke('JoinGame', 'Test', '1234');
    console.log('ChannelEvent was broadcasted by the JOIN-OR-HOST SCREEN');

  }

}

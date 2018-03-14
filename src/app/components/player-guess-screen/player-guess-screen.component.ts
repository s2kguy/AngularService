import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';
import { filter } from 'rxjs/operators';
import { ChannelEvent } from './../../models/channel-event';

@Component({
  selector: 'app-player-guess-screen',
  templateUrl: './player-guess-screen.component.html',
  styleUrls: ['./player-guess-screen.component.css']
})
export class PlayerGuessScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) {
    _SignalRService.EventWatcher.pipe(filter(data => data.Name === 'join')).subscribe(this.updateDom);
  }

  ngOnInit() {
  }
  updateDom(data) {
    console.log('The Player-Guess-Screen Screen has received the ' + data.Name + ' ChannelEvent.');
   // console.log('publishing ChannelEvent', data.data);
   // this._SignalRService._HubConnection.invoke('join', data.object.name)
  }

}

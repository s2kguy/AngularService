import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';
import { filter } from 'rxjs/operators';
import { ChannelEvent } from './../../models/channel-event';

@Component({
  selector: 'app-reveal-screen',
  templateUrl: './reveal-screen.component.html',
  styleUrls: ['./reveal-screen.component.css']
})
export class RevealScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) {
    this._SignalRService.EventWatcher.pipe(filter(data => data.Name === 'join')).subscribe(this.updateDom);
   }

  ngOnInit() {
  }

  updateDom(data) {
    console.log('The REVEAL SCREEN has received the ' + data.Name + ' ChannelEvent.');
  //  console.log('publishing ChannelEvent', data.Data);
  //  this._SignalRService._HubConnection.invoke('join', data.object.name);
  }
}

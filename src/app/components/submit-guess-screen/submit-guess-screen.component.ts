import { Component, OnInit } from '@angular/core';
import { SignalRService } from './../../services/signal-r.service';
import { filter } from 'rxjs/operators';
import { ChannelEvent } from './../../models/channel-event';

@Component({
  selector: 'app-submit-guess-screen',
  templateUrl: './submit-guess-screen.component.html',
  styleUrls: ['./submit-guess-screen.component.css']
})
export class SubmitGuessScreenComponent implements OnInit {

  constructor(private _SignalRService: SignalRService) {
    this._SignalRService.EventWatcher.pipe(filter(data => data.Name === 'join')).subscribe(this.updateDom);
   }

  ngOnInit() {
  }
  updateDom(data) {
    console.log('The SUBMIT-GUESS SCREEN has received the ' + data.Name + ' ChannelEvent.');
  //  console.log('publishing ChannelEvent', data.Data);
  //  this._SignalRService._HubConnection.invoke('join', data.object.name);
  }
}

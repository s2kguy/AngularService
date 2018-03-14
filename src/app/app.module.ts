import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignalRService } from './services/signal-r.service';


import { AppComponent } from './app.component';
import { JoinOrHostComponent } from './components/join-or-host/join-or-host.component';
import { HostScreenComponent } from './components/host-screen/host-screen.component';
import { JoinScreenComponent } from './components/join-screen/join-screen.component';
import { WaitingForPlayersScreenComponent } from './components/waiting-for-players-screen/waiting-for-players-screen.component';
import { WaitingForHostScreenComponent } from './components/waiting-for-host-screen/waiting-for-host-screen.component';
import { SelectImageScreenComponent } from './components/select-image-screen/select-image-screen.component';
import { CropImageScreenComponent } from './components/crop-image-screen/crop-image-screen.component';
import { PlayerGuessScreenComponent } from './components/player-guess-screen/player-guess-screen.component';
import { SubmitGuessScreenComponent } from './components/submit-guess-screen/submit-guess-screen.component';
import { RevealScreenComponent } from './components/reveal-screen/reveal-screen.component';
import { SummaryScreenComponent } from './components/summary-screen/summary-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    JoinOrHostComponent,
    HostScreenComponent,
    JoinScreenComponent,
    WaitingForPlayersScreenComponent,
    WaitingForHostScreenComponent,
    SelectImageScreenComponent,
    CropImageScreenComponent,
    PlayerGuessScreenComponent,
    SubmitGuessScreenComponent,
    RevealScreenComponent,
    SummaryScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }

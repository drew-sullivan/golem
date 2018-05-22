import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardService } from './services/card.service';
import { GameService } from './services/game.service';
import { GemService } from './services/gem.service';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CardService, GameService, GemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

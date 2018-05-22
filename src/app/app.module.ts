import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardService } from './services/card.service';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { HandComponent } from './components/hand/hand.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

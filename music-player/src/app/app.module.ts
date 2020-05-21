import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MusicPlayerModule } from './music-player/music-player.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MusicPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HangmanModule } from './hangman/hangman.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HangmanModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopupModalComponent, NotificationComponent]
})
export class AppModule { }

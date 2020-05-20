import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanComponent } from './hangman.component';
import { NotificationComponent } from '../notification/notification.component';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    HangmanComponent,
    PopupModalComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [HangmanComponent]
})
export class HangmanModule { }

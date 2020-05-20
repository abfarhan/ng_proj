import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  @ViewChild('word', { static: true }) wordEl: ElementRef;
  @ViewChild('wrongletters', { static: false }) wrongLettersEl: ElementRef;

  finalMessage;

  figureParts;
  selectedWord;
  correctLetters = [];
  wrongLetters = [];

  words = ['application', 'programming', 'interface', 'wizard', 'Avengers', 'Marvel', 'Thor', 'Hulk'];

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key.toLowerCase();
      if (this.selectedWord.includes(letter)) {
        if (!this.correctLetters.includes(letter)) {
          this.correctLetters.push(letter);

          this.displayWord();
        } else {
          this.showNotification();
        }
      } else {
        if (!this.wrongLetters.includes(letter)) {
          this.wrongLetters.push(letter);

          this.updateWrongLettersEl();
        } else {
          this.showNotification();
        }
      }
    }
  }

  constructor(
    private elem: ElementRef,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.figureParts = this.elem.nativeElement.querySelectorAll('.svg-part');
    this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.displayWord();
  }

  displayWord() {
    this.wordEl.nativeElement.innerHTML = ` ${this.selectedWord
      .split('')
      .map(
        (letter) =>
          `<span class="letter">${
          this.correctLetters.includes(letter) ? letter : ''
          }</span>`
      )
      .join('')}`;

    const word = this.wordEl.nativeElement.innerText.replace(/[ \n]/g, '');


    if (word === this.selectedWord) {
      this.finalMessage = 'Congratulations! You won!';
      this.openDialog();
    }
  }

  // Update the wrong letters
  updateWrongLettersEl() {
    // Display wrong letters
    this.wrongLettersEl.nativeElement.innerHTML =
      `${this.wrongLetters.length > 0 ? '<p class="wrong-p">Wrong</p>' : ''}
       ${this.wrongLetters.map((letter) => `<span class="wrong-span">${letter}</span>`)}`;

    // Display parts
    this.figureParts.forEach((part, index) => {
      const errors = this.wrongLetters.length;

      if (index < errors) {
        part.style.display = 'block';
      } else {
        part.style.display = 'none';
      }
    });

    // Check if lost
    if (this.wrongLetters.length === this.figureParts.length) {
      this.finalMessage = 'Unfortunately you lost.';
      this.openDialog();
    }
  }


  // Show notification
  showNotification() {
    this._snackBar.openFromComponent(NotificationComponent, {
      duration: 2000,
    });
  }



  onPlayAgain() {
    //  Empty arrays
    this.correctLetters.splice(0);
    this.wrongLetters.splice(0);

    this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];

    this.displayWord();
    this.updateWrongLettersEl();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupModalComponent, {
      width: '350px',
      data: {
        finalMessage: this.finalMessage
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onPlayAgain()
    });
  }
}





import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  finalMessage: string;
}
@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<PopupModalComponent>) { }

  ngOnInit() {
    console.log(this.data)
  }

  onPlayAgainClick(): void {
    this.dialogRef.close();
  }


}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-nfl-game-final-dialog',
  imports: [
    DialogModule
  ],
  templateUrl: './nfl-game-final-dialog.html',
  styleUrl: './nfl-game-final-dialog.scss'
})
export class NflGameFinalDialog {
  @Input() detailsDialogVisible: boolean = false;
  @Output() detailsDialogVisibleChange: EventEmitter<void> = new EventEmitter<void>();

  closeDialog() {
    this.detailsDialogVisibleChange.emit();
  }
}

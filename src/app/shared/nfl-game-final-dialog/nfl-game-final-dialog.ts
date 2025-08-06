import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PlayerStats } from '../player-stats/player-stats';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { Popover, PopoverModule } from 'primeng/popover'; 
import { ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { Recap } from '../recap/recap';


@Component({
  selector: 'app-nfl-game-final-dialog',
  imports: [
    DialogModule,
    ButtonModule,
    PlayerStats,
    ConfirmPopupModule,
    PopoverModule,
    NgClass,
    Recap
  ],
  templateUrl: './nfl-game-final-dialog.html',
  styleUrl: './nfl-game-final-dialog.scss'
})
export class NflGameFinalDialog implements OnChanges {
  @Input() detailsDialogVisible: boolean = false;
  @Input() gameDetails: any = null;
  @Output() detailsDialogVisibleChange: EventEmitter<void> = new EventEmitter<void>();
  detailsOverlayVisible: boolean = false;

  @ViewChild('myPopover')
  myPopover!: Popover;

  ngOnChanges(): void {
    console.log('New dialog data received:', this.gameDetails);
  }
  togglePopover(event: Event) {
    this.myPopover.toggle(event);
  }

  closeDialog() {
    this.detailsDialogVisibleChange.emit();
  }

  showDetails() {
    this.detailsOverlayVisible = true;
  }
}

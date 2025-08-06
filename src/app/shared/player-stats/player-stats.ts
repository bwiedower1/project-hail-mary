import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-stats',
  imports: [],
  templateUrl: './player-stats.html',
  styleUrl: './player-stats.scss'
})
export class PlayerStats {
 @Input() playerStats: any;
}

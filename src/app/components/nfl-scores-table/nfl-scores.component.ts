import { Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { EspnService } from '../../service/espn-service';
import { SeasonType } from '../../utils/enums';
import { NgClass, NgIf } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { NflGameFinalDialog } from '../../shared/nfl-game-final-dialog/nfl-game-final-dialog';

@Component({
  selector: 'nfl-scores-table',
  imports: [
    ButtonModule,
    TabsModule,
    TableModule,
    SelectModule,
    FormsModule,
    NgClass,
    ImageModule,
    ProgressSpinnerModule,
    NgIf,
    DialogModule,
    NflGameFinalDialog
  ],
  templateUrl: './nfl-scores.component.html',
  styleUrl: './nfl-scores.component.scss',
  standalone: true
})
export class NflScoresTable implements OnInit{
  scores: any[];
  weeks: any[];
  years: any[];
  gameDetails: any;
  selectedWeek: any;
  selectedYear: any;
  data: any;
  tableLoading: boolean | undefined;
  detailsFinalDialogVisible: boolean = false;

  constructor(private espnService: EspnService) {
    this.scores  = [];
    this.weeks = [
      {
        value: 'Week 1',
        code: 1
      }
    ];
    this.years = [
      {
        value: '2023',
        code: 2023
      },
      {
        value: '2024',
        code: 2024
      },
      {
        value: '2025',
        code: 2025
      }
    ]
    this.selectedWeek = this.weeks[0];
    this.selectedYear = this.years[2];
  }

  ngOnInit(): void {
    this.tableLoading = true;
    this.espnService.getScoreboardData(2025, SeasonType.RegSeason, 1).subscribe(response => {
      this.scores = this.espnService.processNflScoreData(response);
      this.weeks = this.espnService.processLeagueWeekInfo(response);
      this.selectedWeek = this.weeks[0];
      this.tableLoading = false;
    });
  }

  onSelected() {
    this.tableLoading = true;
    this.espnService.getScoreboardData(this.selectedYear.code, SeasonType.RegSeason, this.selectedWeek.code).subscribe(response => {
      this.scores = this.espnService.processNflScoreData(response);
      this.tableLoading = false;
    });
  }

  onRowClick(game: any) {
    if (game.status === 'Final') {
      this.detailsFinalDialogVisible = true; 
      this.gameDetails = game;
    }
  }

  closeFinalDialog() {
    this.detailsFinalDialogVisible = false;
  }
}

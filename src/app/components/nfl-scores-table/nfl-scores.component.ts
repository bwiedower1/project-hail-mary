import { Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { EspnService } from '../../service/espn-service';

@Component({
  selector: 'nfl-scores-table',
  imports: [
    ButtonModule,
    TabsModule,
    TableModule,
    SelectModule,
    FormsModule
  ],
  templateUrl: './nfl-scores.component.html',
  styleUrl: './nfl-scores.component.scss',
  standalone: true
})
export class NflScoresTable implements OnInit{
  scores: any[];
  weeks: any[];
  selectedWeek: any
  data: any;
  constructor(private espnService: EspnService) {
    this.scores  = [
      {
        homeTeam: 'New England Patriots',
        homeScore: 17,
        awayTeam: "Las Vegas Raiders",
        awayScore: 14,
        time: 'Final'
      },
      {
        homeTeam: 'Kansas City Chiefs',
        homeScore: 14,
        awayTeam: "Cincinatti Bengals",
        awayScore: 20,
        time: 'Final'
      },
      {
        homeTeam: 'San Francisco 49ers',
        homeScore: 17,
        awayTeam: "Seattle Seahawks",
        awayScore: 14,
        time: 'Final'
      },
    ];
    this.weeks = [
      {
        value: 'Week 1',
        code: 1
      },
      {
        value: 'Week 2',
        code: 2
      },
      {
        value: 'Week 3',
        code: 3
      },
    ];
    this.selectedWeek = this.weeks[0]
  }

  ngOnInit(): void {
    this.espnService.getScoreboardData(2024, SeasonType.PreSeason, 1).subscribe(response => {
      this.data = response;
      console.log('API Data:', this.data);
    });
  }
}

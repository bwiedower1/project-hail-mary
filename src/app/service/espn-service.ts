// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // For handling asynchronous data

@Injectable({
  providedIn: 'root'
})
export class EspnService {
  private apiUrl = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl'; // Replace with your actual API base URL

  constructor(private http: HttpClient) { }

  getScoreboardData(year: number, seasonType: number, week: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/scoreboard?dates=${year}&seasontype=${seasonType}&week=${week}`);
  }

  processNflScoreData(response: any): any[] {
    return response.events.map((event: { competitions: { competitors: any[]; }[]; id: any; name: any; status: { type: { detail: any; }; }; }) => {
      const homeCompetitor = event.competitions[0].competitors.find(c => c.homeAway === 'home');
      const awayCompetitor = event.competitions[0].competitors.find(c => c.homeAway === 'away');

      let winner: 'home' | 'away' | null = null;
      if (homeCompetitor?.winner) winner = 'home';
      else if (awayCompetitor?.winner) winner = 'away';

      return {
        id: event.id,
        name: event.name,
        status: event.status.type.detail,
        homeTeam: homeCompetitor?.team.displayName || 'N/A',
        homeTeamLogo: homeCompetitor?.team.logo,
        homeScore: homeCompetitor?.score || 0,
        awayTeam: awayCompetitor?.team.displayName || 'N/A',
        awayTeamLogo: awayCompetitor?.team.logo,
        awayScore: awayCompetitor?.score || 0,
        winner: winner,
      };
    });
  }
  
  processLeagueWeekInfo(response: any): any[] {
    return response.leagues[0].calendar[1].entries.map(((week: { alternateLabel: any; value: any; }) => {
      return {
        value: week.alternateLabel,
        code: week.value
      };
    }))
  }
}
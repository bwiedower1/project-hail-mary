// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // For handling asynchronous data
import { EventInfo, NFLData } from '../utils/nfl-interfaces';

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
    return response.events.map((event: any) => {
      const homeCompetitor = event.competitions[0].competitors.find((c: { homeAway: string; }) => c.homeAway === 'home');
      const awayCompetitor = event.competitions[0].competitors.find((c: { homeAway: string; }) => c.homeAway === 'away');
      const gameInfo = event.competitions[0];

      let winner: 'home' | 'away' | null = null;
      if (homeCompetitor?.winner) winner = 'home';
      else if (awayCompetitor?.winner) winner = 'away';

      return {
        id: event.id,
        name: event.name,
        status: event.status.type.detail,
        homeTeam: homeCompetitor?.team.displayName || 'N/A',
        homeTeamAbb: homeCompetitor?.team.abbreviation || 'N/A',
        homeTeamLogo: homeCompetitor?.team.logo,
        homeTeamRecord: homeCompetitor?.records[0].summary || 'N/A',
        homeScore: homeCompetitor?.score || 0,
        awayTeam: awayCompetitor?.team.displayName || 'N/A',
        awayTeamAbb: awayCompetitor?.team.abbreviation || 'N/A',
        awayTeamLogo: awayCompetitor?.team.logo,
        awayTeamRecord: awayCompetitor?.records[0].summary || 'N/A',
        awayScore: awayCompetitor?.score || 0,
        winner: winner,
        broadcast: gameInfo.broadcast,
        homeTeamQuarterScores: homeCompetitor?.linescores || [],
        awayTeamQuarterScores: awayCompetitor?.linescores || [],
        homePlayerStats: homeCompetitor?.playerStats || [],
        awayPlayerStats: awayCompetitor?.playerStats || [],
        gameHighlights: gameInfo?.headlines?.[0] || [],
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
export interface Team {
  id: string;
  displayName: string;
  abbreviation: string;
  score: number;
}

export interface Competitor {
  id: string;
  homeAway: 'home' | 'away';
  winner: boolean;
  team: Team;
}

export interface Game {
  id: string;
  name: string;
  shortName: string;
  status: {
    type: {
      detail: string;
      state: 'pre' | 'in' | 'post';
    };
  };
  competitions: Array<{
    id: string;
    competitors: Competitor[];
  }>;
}

export interface ScoreboardResponse {
  games: Game[];
}
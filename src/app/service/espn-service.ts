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

      // Example GET request
      getScoreboardData(year: number, seasonType: number, week: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}
            /scoreboard?dates=${year}&seasontype=${seasonType}&week=${week}`);
      }

      // Example POST request
      postData(payload: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/data`, payload);
      }

      // Add methods for PUT, DELETE, etc., as needed
    }
import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { NflScoresTable } from './components/nfl-scores-table/nfl-scores.component';

@Component({
  selector: 'app-root',
  imports: [
    ButtonModule,
    TabsModule,
    NflScoresTable
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('project-hail-mary');
}

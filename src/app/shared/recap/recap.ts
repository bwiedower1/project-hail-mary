import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recap',
  imports: [],
  templateUrl: './recap.html',
  styleUrl: './recap.scss'
})
export class Recap {
 @Input() recapInfo: any;
}

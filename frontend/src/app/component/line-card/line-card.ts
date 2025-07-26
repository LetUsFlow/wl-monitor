import { Component, input } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-line-card',
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatCardSubtitle],
  templateUrl: './line-card.html',
  styleUrl: './line-card.scss'
})
export class LineCard {
  line = input.required<Line>();
}

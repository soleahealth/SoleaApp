import { Component, input } from '@angular/core';

/** Responsive grid of glass feature cards, each with a coloured accent bar. */
@Component({
  selector: 'sol-feature-grid',
  templateUrl: './feature-grid.html',
})
export class FeatureGrid {
  readonly items = input<{ title: string; body: string; tone?: string }[]>([]);
}

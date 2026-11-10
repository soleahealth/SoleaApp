import { Component, input } from '@angular/core';

/** Centered hero for public pages: eyebrow, title, subtitle and optional projected actions. */
@Component({
  selector: 'sol-page-hero',
  templateUrl: './page-hero.html',
})
export class PageHero {
  readonly eyebrow = input('');
  readonly title = input('');
  readonly sub = input('');
  readonly actions = input(false);
}

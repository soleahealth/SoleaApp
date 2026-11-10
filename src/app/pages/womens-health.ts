import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@/components/ui/button';
import { PublicLayout } from '@/components/solea/public-layout';
import { PageHero } from '@/components/solea/page-hero';
import { FeatureGrid } from '@/components/solea/feature-grid';
import { journeys } from '@/lib/journeys';

@Component({
  selector: 'sol-womens-health-page',
  imports: [RouterLink, ButtonDirective, PublicLayout, PageHero, FeatureGrid],
  templateUrl: './womens-health.html',
})
export class WomensHealthPage {
  protected readonly journeyItems = journeys.map((j) => ({ title: j.label, body: j.blurb, tone: j.tone.split(' ')[0] }));
  protected readonly extraItems = [
    { title: 'Find the right professional', body: 'Filter by type of care, district, language and video visits.', tone: 'bg-teal' },
    { title: 'Clear prices in RWF', body: 'See the fee for each service before you book.', tone: 'bg-sun' },
    { title: 'Change or cancel easily', body: 'Move or cancel a visit up to 2 hours before it starts.', tone: 'bg-coral' },
  ];
}

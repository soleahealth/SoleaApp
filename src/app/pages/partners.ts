import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@/components/ui/button';
import { PublicLayout } from '@/components/solea/public-layout';
import { PageHero } from '@/components/solea/page-hero';
import { FeatureGrid } from '@/components/solea/feature-grid';

@Component({
  selector: 'sol-partners-page',
  imports: [RouterLink, ButtonDirective, PublicLayout, PageHero, FeatureGrid],
  templateUrl: './partners.html',
})
export class PartnersPage {
  protected readonly items = [
    { title: 'Facility profiles', body: 'Show your services, address and opening hours in Find Care.', tone: 'bg-periwinkle' },
    { title: 'Team and bookings', body: "See your professionals' schedules and bookings in one place.", tone: 'bg-teal' },
    { title: 'Programmes', body: 'Run outreach and screening programmes and follow their reach.', tone: 'bg-coral' },
    { title: 'Insights', body: 'Understand demand by district and service, without personal data.', tone: 'bg-sun' },
  ];
}

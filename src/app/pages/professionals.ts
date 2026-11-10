import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@/components/ui/button';
import { PublicLayout } from '@/components/solea/public-layout';
import { PageHero } from '@/components/solea/page-hero';
import { FeatureGrid } from '@/components/solea/feature-grid';

@Component({
  selector: 'sol-professionals-page',
  imports: [RouterLink, ButtonDirective, PublicLayout, PageHero, FeatureGrid],
  templateUrl: './professionals.html',
})
export class ProfessionalsPage {
  protected readonly items = [
    { title: 'Your weekly hours', body: 'Set when you see patients in person or by video. Women only book open times.', tone: 'bg-teal' },
    { title: 'Bookings in one list', body: 'Confirm, decline or complete visits as they come in.', tone: 'bg-forest' },
    { title: 'Your services and fees', body: 'Describe what you offer, how long it takes and the price in RWF.', tone: 'bg-sun' },
    { title: 'Verified profile', body: 'We check your licence before your profile shows as verified.', tone: 'bg-periwinkle' },
    { title: 'Reach more women', body: 'Be found by women searching for your type of care in your district.', tone: 'bg-blush' },
    { title: 'Private by default', body: 'You only see details for women who book with you.', tone: 'bg-plum' },
  ];
}

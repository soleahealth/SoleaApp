import { Component } from '@angular/core';
import { PublicLayout } from '@/components/solea/public-layout';
import { PageHero } from '@/components/solea/page-hero';
import { Prose } from '@/components/solea/prose';

@Component({
  selector: 'sol-privacy-page',
  imports: [PublicLayout, PageHero, Prose],
  templateUrl: './privacy.html',
})
export class PrivacyPage {}

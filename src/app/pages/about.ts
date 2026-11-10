import { Component } from '@angular/core';
import { PublicLayout } from '@/components/solea/public-layout';
import { PageHero } from '@/components/solea/page-hero';
import { Prose } from '@/components/solea/prose';

@Component({
  selector: 'sol-about-page',
  imports: [PublicLayout, PageHero, Prose],
  templateUrl: './about.html',
})
export class AboutPage {}

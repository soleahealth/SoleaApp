import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SoleaLogo } from '@/components/solea/solea-logo';
import { ButtonDirective } from '@/components/ui/button';

const nav = [
  { to: '/womens-health', label: "Women's Health" },
  { to: '/access-to-care', label: 'Access to Care' },
  { to: '/professionals', label: 'For Professionals' },
  { to: '/partners', label: 'For Partners' },
  { to: '/about', label: 'About' },
] as const;

const footerCols = [
  { title: 'Care', links: [['/womens-health', "Women's Health"], ['/access-to-care', 'Access to Care'], ['/start', 'Get started']] },
  { title: 'Work with us', links: [['/professionals', 'For Professionals'], ['/partners', 'For Partners']] },
  { title: 'Sōlea', links: [['/about', 'About'], ['/privacy', 'Privacy'], ['/terms', 'Terms']] },
] as const;

/** Shared chrome (header + footer) for the public marketing pages. */
@Component({
  selector: 'sol-public-layout',
  imports: [RouterLink, RouterLinkActive, SoleaLogo, ButtonDirective],
  templateUrl: './public-layout.html',
})
export class PublicLayout {
  protected readonly nav = nav;
  protected readonly footerCols = footerCols;
}

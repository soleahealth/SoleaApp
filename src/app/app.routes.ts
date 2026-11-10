import { Routes } from '@angular/router';
import { HomePage } from '@/pages/home';
import { WomensHealthPage } from '@/pages/womens-health';
import { AccessToCarePage } from '@/pages/access-to-care';
import { ProfessionalsPage } from '@/pages/professionals';
import { PartnersPage } from '@/pages/partners';
import { AboutPage } from '@/pages/about';
import { PrivacyPage } from '@/pages/privacy';
import { TermsPage } from '@/pages/terms';
import { StartPage } from '@/pages/start';
import { AuthPage } from '@/pages/auth';
import { NotFoundPage } from '@/pages/not-found';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Sōlea · Your reproductive health, connected' },
  { path: 'womens-health', component: WomensHealthPage, title: "Women's Health · Sōlea" },
  { path: 'access-to-care', component: AccessToCarePage, title: 'Access to Care · Sōlea' },
  { path: 'professionals', component: ProfessionalsPage, title: 'For Professionals · Sōlea' },
  { path: 'partners', component: PartnersPage, title: 'For Partners · Sōlea' },
  { path: 'about', component: AboutPage, title: 'About · Sōlea' },
  { path: 'privacy', component: PrivacyPage, title: 'Privacy · Sōlea' },
  { path: 'terms', component: TermsPage, title: 'Terms · Sōlea' },
  { path: 'start', component: StartPage, title: 'Get started · Sōlea' },
  { path: 'auth', component: AuthPage, title: 'Sign in · Sōlea' },
  { path: '**', component: NotFoundPage, title: 'Page not found · Sōlea' },
];

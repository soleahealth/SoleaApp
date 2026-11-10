import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  ArrowRight,
  Building2,
  CalendarCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Video,
} from 'lucide-angular';
import { ButtonDirective } from '@/components/ui/button';
import { PublicLayout } from '@/components/solea/public-layout';
import { journeys } from '@/lib/journeys';

const steps = [
  { icon: Search, title: 'Understand your options', body: 'Explore health information and find professionals by your needs, location and language.' },
  { icon: CalendarCheck, title: 'Connect with care', body: 'Choose an online or in-person visit. See fees in RWF and confirm insurance coverage with the facility.' },
  { icon: Sparkles, title: 'Stay connected', body: 'Keep your visits, cycle and check-ups together, and share your health history only with your permission.' },
];

@Component({
  selector: 'sol-home-page',
  imports: [RouterLink, LucideAngularModule, ButtonDirective, PublicLayout],
  templateUrl: './home.html',
})
export class HomePage {
  protected readonly journeys = journeys;
  protected readonly steps = steps;
  protected readonly ArrowRight = ArrowRight;
  protected readonly Building2 = Building2;
  protected readonly ShieldCheck = ShieldCheck;
  protected readonly Sparkles = Sparkles;
  protected readonly Stethoscope = Stethoscope;
  protected readonly Video = Video;
}

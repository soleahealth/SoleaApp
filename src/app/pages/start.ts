import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight, Building2, HeartHandshake, Stethoscope } from 'lucide-angular';
import { SoleaLogo } from '@/components/solea/solea-logo';
import { rolePersona } from '@/lib/personas';
import type { AppRole } from '@/lib/roles';

const paths: { role: AppRole; title: string; body: string; icon: typeof HeartHandshake; tone: string }[] = [
  { role: 'woman', title: "I'm here for my health", body: 'Discover care, manage your health and connect with a community.', icon: HeartHandshake, tone: 'bg-blush/15 text-blush' },
  { role: 'provider', title: "I'm a healthcare provider", body: 'Manage your practice, patients and appointments.', icon: Stethoscope, tone: 'bg-teal/15 text-teal' },
  { role: 'institution', title: "I'm an institution or partner", body: 'Manage partnerships, programmes and healthcare networks.', icon: Building2, tone: 'bg-periwinkle/15 text-periwinkle' },
];

@Component({
  selector: 'sol-start-page',
  imports: [RouterLink, LucideAngularModule, SoleaLogo],
  templateUrl: './start.html',
})
export class StartPage {
  protected readonly paths = paths;
  protected readonly ArrowRight = ArrowRight;
  protected persona(role: AppRole) {
    return rolePersona[role];
  }
}

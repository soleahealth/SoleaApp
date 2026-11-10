import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight, Check, ShieldCheck, Stethoscope, Video } from 'lucide-angular';
import { ButtonDirective } from '@/components/ui/button';
import { PublicLayout } from '@/components/solea/public-layout';
import { PageHero } from '@/components/solea/page-hero';

@Component({
  selector: 'sol-access-to-care-page',
  imports: [RouterLink, LucideAngularModule, ButtonDirective, PublicLayout, PageHero],
  templateUrl: './access-to-care.html',
})
export class AccessToCarePage {
  protected readonly ArrowRight = ArrowRight;
  protected readonly Check = Check;
  protected readonly ShieldCheck = ShieldCheck;
  protected readonly Stethoscope = Stethoscope;
  protected readonly Video = Video;
  protected readonly checklist = [
    'Confirm that the facility accepts your insurance or Mutuelle de Santé.',
    'Ask whether your consultation, screening or test is covered.',
    'Check if you need a referral or prior authorisation.',
    'Ask what identification, insurance details and payment to bring.',
  ];
}

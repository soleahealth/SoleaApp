import { Component, computed, input } from '@angular/core';
import { cn } from '@/lib/utils';

/** The Sōlea wordmark, optionally with the WELLNESS tagline beneath it. */
@Component({
  selector: 'sol-logo',
  templateUrl: './solea-logo.html',
})
export class SoleaLogo {
  readonly class = input('');
  readonly tagline = input(false);
  readonly taglineClass = input('');
  readonly classes = computed(() => cn('inline-block h-8 w-auto', this.class()));
  readonly taglineClasses = computed(() =>
    cn(
      'font-display text-eyebrow font-semibold uppercase tracking-[0.18em] text-muted-foreground',
      this.taglineClass(),
    ),
  );
}

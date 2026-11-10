import { Component, computed, input } from '@angular/core';
import { cn } from '@/lib/utils';

/**
 * The Sōlea brand mark, rendered as <img> so the thin strokes stay crisp;
 * size it with a height utility (h-8, h-24, ...).
 */
@Component({
  selector: 'sol-mark',
  templateUrl: './solea-mark.html',
})
export class SoleaMark {
  readonly class = input('');
  readonly classes = computed(() => cn('inline-block h-8 w-auto', this.class()));
}

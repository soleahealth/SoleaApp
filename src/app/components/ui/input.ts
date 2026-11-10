import { computed, Directive, input } from '@angular/core';
import { cn } from '@/lib/utils';

/** Styling for a native `<input>`. Usage: `<input solInput class="h-12 rounded-2xl" />`. */
@Directive({
  selector: 'input[solInput]',
  host: { '[class]': 'classes()' },
})
export class InputDirective {
  readonly class = input('');
  readonly classes = computed(() =>
    cn(
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      this.class(),
    ),
  );
}

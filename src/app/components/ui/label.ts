import { computed, Directive, input } from '@angular/core';
import { cn } from '@/lib/utils';

/** Styling for a native `<label>`. Usage: `<label solLabel for="email">Email</label>`. */
@Directive({
  selector: 'label[solLabel]',
  host: { '[class]': 'classes()' },
})
export class LabelDirective {
  readonly class = input('');
  readonly classes = computed(() =>
    cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', this.class()),
  );
}

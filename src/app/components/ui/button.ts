import { computed, Directive, input } from '@angular/core';
import { cn } from '@/lib/utils';

export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'ink'
  | 'glass'
  | 'paper'
  | 'sage'
  | 'tint';

export type ButtonSize =
  | 'default'
  | 'sm'
  | 'lg'
  | 'icon'
  | 'xl'
  | 'round'
  | 'icon-xs'
  | 'icon-sm'
  | 'icon-lg';

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';

const variants: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
  outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
  ink: 'rounded-full bg-ink text-ink-foreground shadow-soft hover:bg-ink/90',
  glass: 'rounded-full glass text-foreground hover:bg-card/80',
  paper: 'rounded-full bg-card text-foreground shadow-soft hover:bg-card/90',
  sage: 'rounded-full bg-primary text-primary-foreground hover:bg-primary/90',
  tint: 'rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80',
};

const sizes: Record<ButtonSize, string> = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 rounded-md px-3 text-xs',
  lg: 'h-10 rounded-md px-8',
  icon: 'h-9 w-9',
  xl: 'h-14 px-8 text-base',
  round: 'h-12 w-12 rounded-full [&_svg]:size-5',
  'icon-xs': 'h-6 w-6',
  'icon-sm': 'h-8 w-8',
  'icon-lg': 'h-10 w-10',
};

export function buttonVariants(opts?: { variant?: ButtonVariant; size?: ButtonSize; class?: string }) {
  return cn(base, variants[opts?.variant ?? 'default'], sizes[opts?.size ?? 'default'], opts?.class);
}

/**
 * Button styling applied to a native `<button>` or `<a>` element.
 * Usage: `<button solButton variant="ink" size="xl">` or `<a solButton routerLink="/start">`.
 */
@Directive({
  selector: 'button[solButton], a[solButton]',
  host: { '[class]': 'classes()' },
})
export class ButtonDirective {
  readonly variant = input<ButtonVariant>('default');
  readonly size = input<ButtonSize>('default');
  readonly classes = computed(() => buttonVariants({ variant: this.variant(), size: this.size() }));
}

import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowLeft, Building2, HeartHandshake, MailCheck, Stethoscope } from 'lucide-angular';
import { SoleaLogo } from '@/components/solea/solea-logo';
import { ButtonDirective } from '@/components/ui/button';
import { InputDirective } from '@/components/ui/input';
import { LabelDirective } from '@/components/ui/label';
import { parseRole, roleMeta, type AppRole } from '@/lib/roles';

type Mode = 'signin' | 'signup' | 'forgot';

const roleLook: Record<AppRole, { tone: string; icon: typeof HeartHandshake; line: string }> = {
  woman: { tone: 'bg-rose-gradient text-blush-foreground', icon: HeartHandshake, line: 'Your cycle, your care, your circle.' },
  provider: { tone: 'bg-forest-gradient text-forest-foreground', icon: Stethoscope, line: 'Your practice, patients and schedule in one place.' },
  institution: { tone: 'bg-periwinkle text-periwinkle-foreground', icon: Building2, line: 'Networks, programmes and insights across Rwanda.' },
};

@Component({
  selector: 'sol-auth-page',
  imports: [FormsModule, RouterLink, LucideAngularModule, SoleaLogo, ButtonDirective, InputDirective, LabelDirective],
  templateUrl: './auth.html',
})
export class AuthPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly roleMeta = roleMeta;
  protected readonly ArrowLeft = ArrowLeft;
  protected readonly MailCheck = MailCheck;

  protected readonly role = signal<AppRole>(parseRole(this.route.snapshot.queryParamMap.get('role')));
  protected readonly mode = signal<Mode>(
    this.route.snapshot.queryParamMap.get('account') === 'true' || this.route.snapshot.queryParamMap.get('redirect')
      ? 'signin'
      : 'signup',
  );
  protected readonly sent = signal<null | 'confirm' | 'reset'>(null);

  protected readonly nameModel = signal('');
  protected readonly emailModel = signal('');
  protected readonly passwordModel = signal('');
  protected email() {
    return this.emailModel();
  }

  protected look() {
    return roleLook[this.role()];
  }

  /** Demo sign-in: no backend — open the chosen space directly. */
  protected forward() {
    this.router.navigate([roleMeta[this.role()].home]);
  }

  protected onSubmit() {
    if (this.mode() === 'forgot') {
      this.sent.set('reset');
      return;
    }
    this.forward();
  }

  protected toggleMode() {
    this.mode.set(this.mode() === 'signin' ? 'signup' : 'signin');
  }

  protected backToSignIn() {
    this.sent.set(null);
    this.mode.set('signin');
  }
}

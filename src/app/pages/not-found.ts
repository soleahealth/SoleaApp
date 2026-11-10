import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SoleaMark } from '@/components/solea/solea-mark';

@Component({
  selector: 'sol-not-found-page',
  imports: [RouterLink, SoleaMark],
  templateUrl: './not-found.html',
})
export class NotFoundPage {}

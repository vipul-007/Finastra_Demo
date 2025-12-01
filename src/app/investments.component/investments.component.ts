import { Component, inject } from '@angular/core';
import { investmentStore } from '../store/investment.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investments.component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.css',
})
export class InvestmentsComponent {
  readonly store = inject(investmentStore);

}

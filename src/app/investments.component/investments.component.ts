import { Component, inject } from '@angular/core';
import { investmentStore } from '../store/investment.store';

@Component({
  selector: 'app-investments.component',
  imports: [],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.css',
})
export class InvestmentsComponent {
  readonly store = inject(investmentStore);

}

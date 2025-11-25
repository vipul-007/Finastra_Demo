import { Component, inject, signal } from '@angular/core';
import { Investmentservice } from '../services/investmentservice';
import { Investment } from '../models/investment.model';

@Component({
  selector: 'app-add-investment',
  imports: [],
  templateUrl: './add-investment.html',
  styleUrl: './add-investment.css',
})
export class AddInvestment {
  private iservice = inject(Investmentservice);
  Number = Number;
  id = signal<string | null>(null);
  name = signal<string>('');
  amount = signal<number | null>(null);
  purchaseDate = signal<string>('');
  type = signal<string>('');
  currentValue = signal<number | null>(null);

  onSubmit(): void {
    const investment: any = {
      id: this.id(),
      name: this.name(),
      amount: this.amount(),
      purchaseDate: this.purchaseDate(),
      type: this.type(),
      currentValue: this.currentValue(),
    };
    
    this.iservice.addFreshInvestment(investment).subscribe((newInvestment) => { 
      console.log('Investment added:', newInvestment);
      this.iservice.loadInvestment(); 
    
    })

  }
  }

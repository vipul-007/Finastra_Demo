import { Component, signal } from '@angular/core';
import { Investment } from '../models/investment.model';
import { Investmentservice } from '../services/investmentservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-list',
  imports: [CommonModule],
  templateUrl: './investment-list.html',
  styleUrl: './investment-list.css',
})
export class InvestmentList {
allInvestmentList = signal<Investment[]>([]);

constructor(private investmentService: Investmentservice){}

ngOnInit(){
this.investmentService.loadInvestment();

}

displayAllMyInvestments(){
  console.log("Displaying all investments...");
this.allInvestmentList.set(this.investmentService.investments());
console.log("All Investments:", this.allInvestmentList());


}

}
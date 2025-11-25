import { Component, signal } from '@angular/core';
import { Investmentservice } from '../services/investmentservice';
import { Investment } from '../models/investment.model';

@Component({
  selector: 'app-delete-investment',
  imports: [],
  templateUrl: './delete-investment.html',
  styleUrl: './delete-investment.css',
})
export class DeleteInvestment {
  allInvestmentList = signal<Investment[]>([]);

  constructor(private investmentService: Investmentservice){}
  
  ngOnInit(){
  this.investmentService.loadInvestment();
  setTimeout(() => {
    this. displayAllMyInvestments()
  }, 1000);
  
  }
  
  displayAllMyInvestments(){
    console.log("Displaying all investments...");
  this.allInvestmentList.set(this.investmentService.investments());
  console.log("All Investments:", this.allInvestmentList());
  
  }

  onDeleteInvestment(id:number):void{
    this.investmentService.deleteInvestment(id).subscribe(() => {
      console.log(`Investment with ID ${id} deleted.`);
      this.investmentService.loadInvestment();
      setTimeout(() => {
        this.displayAllMyInvestments();
      }, 500);
    });
    
  }


}

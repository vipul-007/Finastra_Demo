import { Injectable, signal } from '@angular/core';
import { Investment } from '../models/investment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Investmentservice {
  private apiUrl = 'http://localhost:4500/investments';

  investments = signal<Investment[]>([]);

  constructor(private http:HttpClient) { }

  loadInvestment(){
     console.log("load investment called")
    this.http.get<Investment[]>(this.apiUrl).subscribe(data => {
      this.investments.set(data);
      console.log("Investments loaded:", data);
    });

  }

  getInvestmentById(id: number): Observable<Investment> {
    return this.http.get<Investment>(`${this.apiUrl}/${id}`);
  }

  
    
}

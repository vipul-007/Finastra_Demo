import { Injectable } from '@angular/core';
import { Investment } from '../models/investment.model';

@Injectable({
  providedIn: 'root',
})
export class Investmentservicenew {

  private readonly baseUrl = 'http://localhost:4500/investments';

  async getAll(): Promise<Investment[]> {
    const res = await fetch(this.baseUrl);
   if(!res.ok) throw new Error(`HTTPS ${res.status}`);
   return (await res.json()) as Investment[];
  }
  
}

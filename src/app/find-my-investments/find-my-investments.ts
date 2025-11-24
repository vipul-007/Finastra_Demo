import { Component, computed, inject, signal } from '@angular/core';
import { Investmentservice } from '../services/investmentservice';
import { catchError, debounceTime, distinctUntilChanged, finalize, of, single, switchMap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Investment } from '../models/investment.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-find-my-investments',
  imports: [],
  templateUrl: './find-my-investments.html',
  styleUrl: './find-my-investments.css',
})
export class FindMyInvestments {

  private investmentService = inject(Investmentservice);
  id = signal<number | null>(null);
  loading = signal(false);
  error = signal<string>('');

  private id$ = toObservable(this.id).pipe(
    debounceTime(300),
    distinctUntilChanged()
  );

  investment = toSignal<Investment | null>(
    this.id$.pipe(
      switchMap(id => {
         this.error.set('');
         if (id === null || Number.isNaN(id)) { 
          return of(null);
         }
          this.loading.set(true);
          return this.investmentService.getInvestmentById(id).pipe(
            finalize(() => this.loading.set(false)),
            catchError(err => {
              console.error("GetInvetssmentById error:", err);
              this.error.set('Investment not found or an error occurred.');
              return of(null);
            })
          )

      })
    ),{ initialValue: null  });

//derived fields for @for rendering
fields = computed(() => {
  const inv= this.investment();
  if(!inv){
    return [];
  }
  const inr = (n: number)=>{
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(n);
  }
  return [
    { label: 'ID', value: inv.id },
    { label: 'Name', value: inv.name },
    { label: 'Amount', value: inr(inv.amount) },
    { label: 'Purchase Date', value: new Date(inv.purchaseDate).toLocaleDateString() },
    { label: 'Type', value: inv.type },
    { label: 'Current Value', value: inr(inv.currentValue) },
  ];

})

//event handlers
onIdinput(event: Event):void{
  const raw = (event.target as HTMLInputElement).value;
  const num = raw == '' ? null : Number(raw);
  this.id.set(Number.isFinite(num) ? num : null);
}

}

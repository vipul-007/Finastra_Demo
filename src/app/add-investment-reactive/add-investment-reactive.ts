import { Component, inject, signal } from '@angular/core';
import { FormControl, NonNullableFormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Investmentservice } from '../services/investmentservice';
import { Investment } from '../models/investment.model';
import { CommonModule } from '@angular/common';
type InvestmentFormModel={
      id:FormControl<number>;
      name:FormControl<string>;
      type:FormControl<'Equity' | 'Debt' | 'Mutual Fund'>;
      amount:FormControl<number>;
      purchaseDate:FormControl<string>;
      currentValue:FormControl<number>;
                          }
@Component({
  selector: 'app-add-investment-reactive',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-investment-reactive.html',
  styleUrl: './add-investment-reactive.css',
})
export class AddInvestmentReactive {

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly InvestmentService = inject(Investmentservice);
 
  isSubmitting = signal(false);
  serverError = signal<string | null>(null);
  successMsg = signal<string | null>(null);
 
  form: FormGroup<InvestmentFormModel> = this.fb.group({
    id: this.fb.control(0, [Validators.required, Validators.min(1)]),
    name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
    type: this.fb.control<'Equity' | 'Debt' | 'Mutual Fund'>('Equity', [Validators.required]),
    amount: this.fb.control(0, [Validators.required, Validators.min(1)]),
    purchaseDate: this.fb.control('', [Validators.required]),
    currentValue: this.fb.control(0, [Validators.required, Validators.min(0)]),
  });
 
  get f() {
    return this.form.controls;
  }
 
  onSubmit() : void {
    this.serverError.set(null);
    this.successMsg.set(null);
 
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
 
    const payload = this.form.getRawValue();
    payload.id = Number(payload.id);
 
    if(this.InvestmentService.investments().some(inv => inv.id === payload.id)) {
      this.serverError.set(`Investment with ID ${payload.id} already exists.`);
      return;
    }
 
    this.isSubmitting.set(true);
 
    this.InvestmentService.addFreshInvestment(payload).subscribe({
      next: (investment) => {
        this.successMsg.set(`Investment with ID ${investment.id} added successfully.`);
        this.form.reset({
          id: 0,
          name: '',
          type: 'Equity',
          amount: 0,
          purchaseDate: '',
          currentValue: 0,
        });
        this.isSubmitting.set(false);
      },
      error: (err) => {
        this.serverError.set('Failed to add investment. Please try again later.');
        this.isSubmitting.set(false);
      }
    });
 
  }



}

import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InvestmentList } from './investment-list/investment-list';
import { FindMyInvestments } from './find-my-investments/find-my-investments';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  standalone:true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('finastra-investment-app');
}

import { Routes } from '@angular/router';
import { InvestmentList } from './investment-list/investment-list';
import { FindMyInvestments } from './find-my-investments/find-my-investments';
import { AddInvestment } from './add-investment/add-investment';
import { DeleteInvestment } from './delete-investment/delete-investment';
import { ModifyInvestment } from './modify-investment/modify-investment';
import { AddInvestmentReactive } from './add-investment-reactive/add-investment-reactive';
import { InvestmentsComponent } from './investments.component/investments.component';
import { Login } from './login/login';
import { Navbar } from './navbar/navbar';

export const routes: Routes = [
    {path: '', component: Login},  
    {path: 'dashboard', component: Navbar , children: [ 
    { path: '', redirectTo: 'investment', pathMatch: 'full' }, // Default child route
    {path: 'investmentlist', component: InvestmentList },
    {path: 'findmyinvestment', component: FindMyInvestments},
    {path:'addinvestment', component: AddInvestment },
    {path:'deleteinvestment', component: DeleteInvestment },
    {path:'modifyinvestment', component: ModifyInvestment },
    {path:'addinvestmentreactive', component:AddInvestmentReactive},
    {path:'investment', component:InvestmentsComponent}
    ]},
    
];

import { Routes } from '@angular/router';
import { InvestmentList } from './investment-list/investment-list';
import { FindMyInvestments } from './find-my-investments/find-my-investments';
import { AddInvestment } from './add-investment/add-investment';
import { DeleteInvestment } from './delete-investment/delete-investment';
import { ModifyInvestment } from './modify-investment/modify-investment';
import { AddInvestmentReactive } from './add-investment-reactive/add-investment-reactive';

export const routes: Routes = [
    {path: 'investmentlist', component: InvestmentList },
    {path: 'findmyinvestment', component: FindMyInvestments},
    {path:'addinvestment', component: AddInvestment },
    {path:'deleteinvestment', component: DeleteInvestment },
    {path:'modifyinvestment', component: ModifyInvestment },
    {path:'addinvestmentreactive', component:AddInvestmentReactive}
];

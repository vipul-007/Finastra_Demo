export interface Investment{
    id: number | string;
    name: string;
    amount: number;
    purchaseDate: string;
    type: 'Equity' | 'Dept' | 'Mutual Fund';
    currentValue: number;
}
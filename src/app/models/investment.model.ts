export interface Investment{
    id: string;
    name: string;
    amount: number;
    purchaseDate: string;
    type: 'Equity' | 'Dept' | 'Mutual Fund';
    currentValue: number;
}
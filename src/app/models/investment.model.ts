export interface Investment{
    id: string | number;
    name: string;
    amount: number;
    purchaseDate: string;
    type: 'Equity' | 'Dept' | 'Mutual Fund';
    currentValue: number;
}
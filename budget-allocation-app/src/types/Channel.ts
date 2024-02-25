export enum BudgetAllocation {
  EQUAL = 'equal',
  MANUAL = 'manual',
}

export enum BudgetFrequency {
  ANNUALLY = 'Annually',
  MONTHLY = 'Monthly',
  QUARTERLY = 'Quarterly',
}


export type Channel = {
  name: string;
  budgetFrequency: BudgetFrequency;
  budgetBase: number;
  budgetAllocation: BudgetAllocation;
  budgetBreakdown: number[];
  id:string;
}

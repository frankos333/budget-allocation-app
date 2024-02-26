import { BudgetAllocation, BudgetFrequency, Channel } from "./types/Channel";

export const mockChannels: Channel[] = [
  {
    name: "Channel 1",
    budgetFrequency: BudgetFrequency.ANNUALLY,
    budgetBase: 12000,
    budgetAllocation: BudgetAllocation.EQUAL,
    budgetBreakdown: new Array(12).fill(1000),
    id: "1",
  },
  {
    name: "Channel 2",
    budgetFrequency: BudgetFrequency.ANNUALLY,
    budgetBase: 78000,
    budgetAllocation: BudgetAllocation.MANUAL,
    budgetBreakdown: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000],
    id: "2",
  },
];

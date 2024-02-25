import { BudgetAllocation, BudgetFrequency, Channel } from "./types/Channel";

export const CHANNEL_BASE_FORM: Channel = {
  name: "New Channel",
  budgetFrequency: BudgetFrequency.ANNUALLY,
  budgetAllocation: BudgetAllocation.EQUAL,
  budgetBase: 0,
  budgetBreakdown: new Array(12).fill(0),
  id: Date.now().toString(),
};

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const TABS = ["Tab 1", "Tab 2"];

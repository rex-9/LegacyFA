import { icons } from "./assets";
import { IExpense, IGoal, INet, IStock, ITransaction, ITransfer } from "./interface";

const currentUser = {
  name: "Michaela",
}

const nets: INet[] = [
  {
    label: "Income",
    amount: 6558.67,
    percentage: 16,
    increase: true,
  },
  {
    label: "Expenses",
    amount: 1420.05,
    percentage: 36,
    increase: false,
  },
  {
    label: "Investment",
    amount: 950.35,
    percentage: 12,
    increase: true,
  },
];

const expenses: IExpense[] = [
  {
    field: "Supermarkets",
    amount: 186.65,
    color: "#fff",
  },
  {
    field: "Transfers",
    amount: 186.65,
    color: "#fff",
  },
  {
    field: "Restaurants",
    amount: 186.65,
    color: "#fff",
  },
  {
    field: "Cash",
    amount: 186.65,
    color: "#fff",
  },
  {
    field: "Study",
    amount: 186.65,
    color: "#fff",
  },
  {
    field: "Others",
    amount: 186.65,
    color: "#fff",
  },
];

const transactions: ITransaction[] = [
  {
    endUser: "Alex T",
    type: "Transfers",
    amount: 300,
    increase: true,
  },
  {
    endUser: "Uber",
    type: "Taxi",
    amount: 19.84,
    increase: false,
  },
  {
    endUser: "Metro",
    type: "Supermarkets",
    amount: 85.29,
    increase: false,
  },
  {
    endUser: "Cashback",
    type: "Rewards",
    amount: 4.5,
    increase: true,
  },
];

const stocks: IStock[] = [
  {
    icon: icons.apple,
    initials: "AAPL",
    name: "Apple Inc.",
    price: 3204.05,
    amount: 92.59,
    increase: true,
  },
  {
    icon: icons.tesla,
    initials: "TSLA",
    name: "Tesla",
    price: 8547.82,
    amount: 111.98,
    increase: false,
  },
  {
    icon: icons.netflix,
    initials: "NFLX",
    name: "Netflix",
    price: 1210,
    amount: 7.02,
    increase: false,
  },
  {
    icon: icons.amazon,
    initials: "AMZN",
    name: "Amazon",
    price: 14367.75,
    amount: 206.89,
    increase: true,
  },
];

const transfers: ITransfer[] = [
  {
    name: "Alexander Abramson",
    account: 3827483940593827,
  },
  {
    name: "Juila Davidson",
    account: 3827483940593827,
  },
  {
    name: "Andrew Evens",
    account: 3827483940593827,
  },
];

const goals: IGoal[] = [
  {
    name: "Trip",
    current: 10576,
    total: 20000,
  },
  {
    name: "House",
    current: 54637,
    total: 180000,
  },
  {
    name: "Camera",
    current: 983.75,
    total: 4650,
  },
];

export { currentUser, nets, expenses, transactions, stocks, transfers, goals };

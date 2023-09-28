import { icons } from "./assets";
import { IExpense, IGoal, IStock, ITransaction, ITransfer } from "./interface";

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
    icon: icons.logo.icon,
    initials: "AAPL",
    name: "Apple Inc.",
    price: 3204.05,
    amount: 92.59,
    increase: true,
  },
  {
    icon: icons.logo.icon,
    initials: "TSLA",
    name: "Tesla",
    price: 8547.82,
    amount: 111.98,
    increase: false,
  },
  {
    icon: icons.logo.icon,
    initials: "NFLX",
    name: "Netflix",
    price: 1210,
    amount: 7.02,
    increase: false,
  },
  {
    icon: icons.logo.icon,
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

export { expenses, transactions, stocks, transfers, goals };

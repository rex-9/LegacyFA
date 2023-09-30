import {
  ICard,
  IExpense,
  IFinance,
  IGoal,
  INet,
  IRevenue,
  IStock,
  ITransaction,
  ITransfer,
} from "./interface";

// Fetched from the Socal Storage
const currentUser = {
  name: "Michaela",
};

// Fetched using API
const nets: INet[] = [
  {
    label: "Income",
    amount: 6558.67,
    percentage: 16,
    increase: true,
    data: [0, 2418, 6456, 5555, 6526, 4356, 6558.67],
  },
  {
    label: "Expenses",
    amount: 1420.05,
    percentage: 36,
    increase: false,
    data: [100, 2418, 1456, 3555, 6526, 4356, 1420.05],
  },
  {
    label: "Investment",
    amount: 950.35,
    percentage: 12,
    increase: true,
    data: [0, 2418, 6456, 3555, 2526, 4356, 950.35],
  },
];

const revenues: IRevenue[] = [
  {
    year: 2021,
    data: [
      0, 2418, 6456, 5555, 6526, 4356, 6558.67, 6456, 5555, 6526, 4356, 6558.67,
    ],
  },
  {
    year: 2022,
    data: [
      0, 1418, 5456, 4555, 3526, 6356, 3558.67, 8456, 3555, 4526, 6356, 6558.67,
    ],
  },
];

const expenses: IExpense[] = [
  {
    field: "Supermarkets",
    amount: 186.65,
  },
  {
    field: "Transfers",
    amount: 207.82,
  },
  {
    field: "Restaurants",
    amount: 197.25,
  },
  {
    field: "Cash",
    amount: 340,
  },
  {
    field: "Study",
    amount: 500.85,
  },
  {
    field: "Others",
    amount: 93.04,
  },
];

const finance: IFinance = {
  income: [2310, 1220, 630, 3210, 1220, 3230, 1110],
  expense: [3310, 3220, 3300, 2210, 2220, 1230, 3110],
};

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
    initials: "AAPL",
    name: "Apple Inc.",
    price: 3204.05,
    amount: 92.59,
    increase: true,
  },
  {
    initials: "TSLA",
    name: "Tesla",
    price: 8547.82,
    amount: 111.98,
    increase: false,
  },
  {
    initials: "NFLX",
    name: "Netflix",
    price: 1210,
    amount: 7.02,
    increase: false,
  },
  {
    initials: "AMZN",
    name: "Amazon",
    price: 14367.75,
    amount: 206.89,
    increase: true,
  },
];

const cards: ICard[] = [
  {
    name: "Michaela Evans",
    account: 4654536740550556,
    expireDate: "05/24",
    balance: 5089.56,
    type: "VISA",
  },
  {
    name: "Michaela Evans",
    account: 4654536740550556,
    expireDate: "09/25",
    balance: 5089.56,
    type: "Master",
  },
];

const transfers: ITransfer[] = [
  {
    name: "Alexander Abramson",
    account: 3827483940591676,
  },
  {
    name: "Juila Davidson",
    account: 3827483940592676,
  },
  {
    name: "Andrew Evens",
    account: 3827483940590987,
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

export {
  currentUser,
  nets,
  revenues,
  expenses,
  finance,
  transactions,
  stocks,
  cards,
  transfers,
  goals,
};

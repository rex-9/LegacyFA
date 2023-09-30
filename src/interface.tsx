export interface IIcon {
  icon: string;
  label: string;
}

export interface INet {
  label: string;
  amount: number;
  percentage: number;
  increase: boolean;
  data: number[];
}

export interface IRevenue {
  year: number;
  data: number[];
}

export interface IExpense {
  field: string;
  amount: number;
}

export interface IFinance {
  income: number[];
  expense: number[];
}

export interface ITransaction {
  endUser: string;
  type: string;
  amount: number;
  increase: boolean;
}

export interface IStock {
  initials: string;
  name: string;
  price: number;
  amount: number;
  increase: boolean;
}

export interface ICard {
  name: string;
  account: number;
  expireDate: string;
  balance: number;
  type: string;
}

export interface ITransfer {
  name: string;
  account: number;
}

export interface IGoal {
  name: string;
  current: number;
  total: number;
}

export interface IIcon {
  icon: string;
  label: string;
}

export interface INet {
  label: string;
  amount: number;
  percentage: number;
  increase: boolean;
}

export interface IExpense {
  field: string;
  amount: number;
  color: string;
}

export interface ITransaction {
  endUser: string;
  type: string;
  amount: number;
  increase: boolean;
}

export interface IStock {
  icon: IIcon;
  initials: string;
  name: string;
  price: number;
  amount: number;
  increase: boolean;
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

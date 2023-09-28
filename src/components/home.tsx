import { IIcon } from "../assets/index";
import { icons } from "../assets";
import Nav from "./nav";

const Home = () => {
  const TinyIcon = ({ icon }: { icon: IIcon }) => {
    return (
      <img
        className="w-2 h-2 rounded-lg text-gray-300"
        src={icon.icon}
        alt={icon.label}
      />
    );
  };

  const Heading = ({
    header,
    action,
    icon,
  }: {
    header: string;
    action: string;
    icon: IIcon;
  }) => {
    return (
      <div className="flex-center w-full !justify-between">
        <span className="text-2xl font-quicksand font-bold">{header}</span>
        <span className="text-sm flex-center gap-2 text-gray-300">
          {action}
          <TinyIcon icon={icon} />
        </span>
      </div>
    );
  };

  const NetAnalysisCard = ({
    label,
    net,
    change,
    increase,
  }: {
    label: string;
    net: number;
    change: number;
    increase: boolean;
  }) => {
    return (
      <article className="relative w-1/3 h-48 p-0 px-4 rounded-lg flex-center flex-col !items-start !justify-around">
        <Heading header={label} action={"this month"} icon={icons.lens} />
        <p className="text-3xl font-bold">${net}</p>
        {increase ? (
          <span className="text-green-600 text-sm flex-center gap-2">
            <TinyIcon icon={icons.lens} />
            <span>+{change}%</span>
          </span>
        ) : (
          <span className="text-red-600 text-sm flex-center gap-2">
            <TinyIcon icon={icons.lens} />
            <span>-{change}%</span>
          </span>
        )}
        <img
          className="absolute bottom-0 right-0"
          src={icons.logo.icon}
          alt={icons.logo.label}
        />
      </article>
    );
  };

  const RevenueAnalysisCard = ({
    lastYear,
    thisYear,
  }: {
    lastYear: number;
    thisYear: number;
  }) => {
    return (
      <article className="relative h-72 w-2/3 p-4 rounded-lg">
        <div className="flex-center w-full !justify-between mb-4">
          <span className="text-2xl font-quicksand font-bold">
            Revenue Analysis
          </span>
          <div className="flex-center gap-4">
            <span className="text-sm flex-center gap-2">
              <div className="rounded-full h-3 w-3" />
              {lastYear}
              <TinyIcon icon={icons.lens} />
            </span>
            <span className="text-sm flex-center gap-2">
              <div className="rounded-full h-3 w-3" />
              {thisYear}
              <TinyIcon icon={icons.lens} />
            </span>
          </div>
        </div>
        <img
          // className="absolute bottom-0 right-0"
          src={icons.logo.icon}
          alt={icons.logo.label}
        />
      </article>
    );
  };

  const FinancialAnalysisCard = () => {
    return (
      <article className="relative h-72 w-1/3 p-4 rounded-lg">
        <Heading
          header={"Financial Analysis"}
          action={"this month"}
          icon={icons.lens}
        />
        <div className="flex-center !justify-start gap-4 my-4">
          <span className="text-sm flex-center gap-2">
            <div className="rounded-full h-3 w-3" />
            Expanses
            <TinyIcon icon={icons.lens} />
          </span>
          <span className="text-sm flex-center gap-2">
            <div className="rounded-full h-3 w-3" />
            Income
            <TinyIcon icon={icons.lens} />
          </span>
        </div>
        <img
          // className="absolute bottom-0 right-0"
          src={icons.logo.icon}
          alt={icons.logo.label}
        />
      </article>
    );
  };

  interface IExpense {
    field: string;
    amount: number;
    color: string;
  }

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

  const ExpensesAnalysisCard = ({ expenses }: { expenses: IExpense[] }) => {
    return (
      <div className="w-2/5 h-72 p-4 rounded-lg">
        <Heading header={"Expenses"} action={"last week"} icon={icons.lens} />
        <div className="flex-center !justify-around my-3">
          <img
            // className="absolute bottom-0 right-0"
            src={icons.logo.icon}
            alt={icons.logo.label}
          />
          <div>
            {expenses.map((expense: IExpense) => (
              <p className="flex-center !justify-between gap-4">
                <div
                  className={`rounded-full h-3 w-3`}
                  style={{ backgroundColor: expense.color }}
                />
                <span className="flex-grow">{expense.field}</span>
                <span>${expense.amount}</span>
              </p>
            ))}
          </div>
        </div>
        <span>You have spent 16% less money this week than last week.</span>
      </div>
    );
  };

  interface ITransaction {
    endUser: string;
    type: string;
    amount: number;
    increase: boolean;
  }

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

  const TransactionsAnalysisCard = ({
    transactions,
  }: {
    transactions: ITransaction[];
  }) => {
    return (
      <div className="w-1/2 h-72 p-4 rounded-lg">
        <Heading header={"Transactions"} action={"today"} icon={icons.lens} />
        {transactions.map((transaction: ITransaction, index: number) => (
          <div
            className="flex-center !justify-between gap-4 py-1"
            style={{ borderTop: index !== 0 ? "1px solid black" : "" }}
          >
            <img
              className="w-6 h-6"
              src={icons.lens.icon}
              alt={icons.lens.label}
            />
            <div className="flex-grow">
              <p>{transaction.endUser}</p>
              <p className="text-gray-300">{transaction.type}</p>
            </div>
            <div>
              {transaction.increase ? (
                <p className="text-green-600">+${transaction.amount}</p>
              ) : (
                <p className="text-red-600">-${transaction.amount}</p>
              )}
              <p className="text-gray-300">Debit Card</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  interface IStock {
    icon: string;
    initials: string;
    name: string;
    price: number;
    amount: number;
    increase: boolean;
  }

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

  const InvestmentAnalysisCard = ({ stocks }: { stocks: IStock[] }) => {
    return (
      <div className="w-1/2 h-72 p-4 rounded-lg">
        <Heading header={"Investment"} action={"today"} icon={icons.lens} />
        {stocks.map((stock: IStock, index: number) => (
          <div
            className="flex-center !justify-between gap-4 py-1"
            style={{ borderTop: index !== 0 ? "1px solid black" : "" }}
          >
            <img
              className="w-6 h-6"
              src={icons.lens.icon}
              alt={icons.lens.label}
            />
            <div className="w-20">
              <p>{stock.initials.toUpperCase()}</p>
              <p className="text-gray-300">{stock.name}</p>
            </div>
            {stock.increase ? (
              <span className="text-green-600 text-sm flex-center gap-2 flex-grow !justify-start">
                <TinyIcon icon={icons.lens} />
                <span>
                  +{parseFloat(((stock.amount / stock.price) * 100).toFixed(2))}
                  %
                </span>
              </span>
            ) : (
              <span className="text-red-600 text-sm flex-center gap-2 flex-grow !justify-start">
                <TinyIcon icon={icons.lens} />
                <span>
                  -{parseFloat(((stock.amount / stock.price) * 100).toFixed(2))}
                  %
                </span>
              </span>
            )}
            <div>
              <p>${stock.price}</p>
              {stock.increase ? (
                <p className="text-green-600">+${stock.amount}</p>
              ) : (
                <p className="text-red-600">-${stock.amount}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const MyCards = () => {
    return (
      <article className="h-1/3 w-[90%] p-4 rounded-lg">
        <Heading header={"My Cards"} action={"add card"} icon={icons.lens} />
      </article>
    );
  };

  interface ITransfer {
    name: string;
    account: number;
  }

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

  const QuickTransfers = () => {
    return (
      <article className="h-1/3 w-[90%] p-4 rounded-lg">
        <Heading header={"Quick Transfers"} action={"add"} icon={icons.lens} />
        {transfers.map((transfer: ITransfer, index: number) => (
          <button
            className="flex-center !justify-around gap-4 w-full my-3 pt-3"
            style={{ borderTop: index !== 0 ? "1px solid gray" : "" }}
          >
            <span className="bg-white rounded-full px-4 py-2 w-10">
              {transfer.name[0].toUpperCase()}
            </span>
            <div className="flex-grow text-start">
              <div>{transfer.name}</div>
              <div className="text-gray-200 text-xs">
                **** {transfer.account.toString().slice(-4)}
              </div>
            </div>
            <img
              className="w-4 h-4"
              src={icons.lens.icon}
              alt={icons.lens.label}
            />
          </button>
        ))}
      </article>
    );
  };

  interface IGoal {
    name: string;
    current: number;
    total: number;
  }

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

  const Goals = () => {
    return (
      <article className="h-1/3 w-[90%] p-4 rounded-lg">
        <Heading header={"Goals"} action={"add goal"} icon={icons.lens} />
        {goals.map((goal: IGoal) => (
          <button className="flex-center !justify-around gap-4 w-full my-3 pt-3">
            {goal.name === "Trip" && (
              <img
                className="w-6 h-6"
                src={icons.lens.icon}
                alt={icons.lens.label}
              />
            )}
            {goal.name === "House" && (
              <img
                className="w-6 h-6"
                src={icons.lens.icon}
                alt={icons.lens.label}
              />
            )}
            {goal.name === "Camera" && (
              <img
                className="w-6 h-6"
                src={icons.lens.icon}
                alt={icons.lens.label}
              />
            )}
            <div className="flex-grow">
              <div className="flex-center !justify-between">
                <div>{goal.name}</div>
                <div>
                  ${goal.current} /{" "}
                  <span className="text-gray-300">${goal.total}</span>
                </div>
              </div>
              <img
                className="w-4 h-4"
                src={icons.lens.icon}
                alt={icons.lens.label}
              />
            </div>
          </button>
        ))}
      </article>
    );
  };

  return (
    <div className="w-[85%]">
      <Nav />
      <section className="flex-center !items-start h-full">
        <div className="w-3/4 h-full flex flex-col justify-between pl-4 pb-32 pt-4">
          <div className="flex-center mx-4 gap-4">
            <NetAnalysisCard
              label="Income"
              net={1230.44}
              change={10}
              increase={true}
            />
            <NetAnalysisCard
              label="Expenses"
              net={3022.44}
              change={5}
              increase={false}
            />
            <NetAnalysisCard
              label="Investment"
              net={2000.44}
              change={5}
              increase={true}
            />
          </div>
          <div className="flex-center mx-4 gap-4">
            <RevenueAnalysisCard lastYear={2021} thisYear={2022} />
            <FinancialAnalysisCard />
          </div>
          <div className="flex-center mx-4 gap-4">
            <ExpensesAnalysisCard expenses={expenses} />
            <div className="w-3/5 flex-center gap-4">
              <TransactionsAnalysisCard transactions={transactions} />
              <InvestmentAnalysisCard stocks={stocks} />
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col justify-start items-start gap-4 h-full pb-32 pt-4">
          <MyCards />
          <QuickTransfers />
          <Goals />
        </div>
      </section>
    </div>
  );
};

export default Home;

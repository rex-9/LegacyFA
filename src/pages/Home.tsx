import Nav from "../components/Nav";
import NetAnalysisCard from "../components/analysis/NetAnalysisCard";
import RevenueAnalysisCard from "../components/analysis/RevenueAnalysisCard";
import FinancialAnalysisCard from "../components/analysis/FinancialAnalysisCard";
import ExpensesAnalysisCard from "../components/analysis/ExpensesAnalysisCard";
import InvestmentAnalysisCard from "../components/analysis/InvestmentAnalysisCard";
import TransactionsAnalysisCard from "../components/analysis/TransactionsAnalysisCard";
import {
  expenses,
  finance,
  nets,
  revenues,
  stocks,
  transactions,
} from "../data";
import QuickTransfers from "../components/QuickTransfers";
import Goals from "../components/Goals";
import MyCards from "../components/MyCards";
import { INet } from "../interface";
import AreaChart from "../components/charts/AreaChart";

const Home = () => {
  return (
    <div className="w-[85%] dark-gray">
      <Nav />
      <section className="flex-center h-[90%]">
        <div className="w-3/4 h-full flex flex-col gap-8 justify-start pl-4 py-4">
          <div className="flex-center h-2/5 mx-4 gap-4">
            {nets.map((net: INet) => (
              <div key={net.label} className="w-1/3 h-full">
                <NetAnalysisCard
                  label={net.label}
                  amount={net.amount}
                  percentage={net.percentage}
                  increase={net.increase}
                  chart={<AreaChart label={net.label} data={net.data} />}
                />
              </div>
            ))}
          </div>
          <div className="flex-center h-2/3 mx-4 gap-4">
            <RevenueAnalysisCard revenues={revenues} />
            <FinancialAnalysisCard finance={finance} />
          </div>
          <div className="flex-center mx-4 gap-4">
            <ExpensesAnalysisCard expenses={expenses} />
            <div className="w-3/5 flex-center gap-4">
              <TransactionsAnalysisCard transactions={transactions} />
              <InvestmentAnalysisCard stocks={stocks} />
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col justify-start items-start gap-4 h-full py-4">
          <MyCards />
          <QuickTransfers />
          <Goals />
        </div>
      </section>
    </div>
  );
};

export default Home;

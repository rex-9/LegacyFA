import Nav from "../components/Nav";
import NetAnalysisCard from "../components/NetAnalysisCard";
import RevenueAnalysisCard from "../components/RevenueAnalysisCard";
import FinancialAnalysisCard from "../components/FinancialAnalysisCard";
import ExpensesAnalysisCard from "../components/ExpensesAnalysisCard";
import InvestmentAnalysisCard from "../components/InvestmentAnalysisCard";
import TransactionsAnalysisCard from "../components/TransactionsAnalysisCard";
import { expenses, nets, stocks, transactions } from "../data";
import QuickTransfers from "../components/QuickTransfers";
import Goals from "../components/Goals";
import MyCards from "../components/MyCards";
import { INet } from "../interface";
import AreaChart from "../components/AreaChart";

const Home = () => {
  return (
    <div className="w-[85%] bg-gray-200">
      <Nav />
      <section className="flex-center !items-start h-full">
        <div className="w-3/4 h-full flex flex-col justify-between pl-4 pb-28 pt-4">
          <div className="flex-center mx-4 gap-4">
            {nets.map((net: INet) => (
              <div key={net.label} className="w-1/3">
                <NetAnalysisCard
                  label={net.label}
                  amount={net.amount}
                  percentage={net.percentage}
                  increase={net.increase}
                  chart={<AreaChart label={net.label} />}
                />
              </div>
            ))}
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
        <div className="w-1/4 flex flex-col justify-start items-start gap-4 h-full pb-28 pt-4">
          <MyCards />
          <QuickTransfers />
          <Goals />
        </div>
      </section>
    </div>
  );
};

export default Home;

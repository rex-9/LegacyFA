import Nav from "../components/nav";
import NetAnalysisCard from "../components/netAnalysisCard";
import RevenueAnalysisCard from "../components/revenueAnalysisCard";
import FinancialAnalysisCard from "../components/financialAnalysisCard";
import ExpensesAnalysisCard from "../components/expensesAnalysisCard";
import InvestmentAnalysisCard from "../components/InvestmentAnalysisCard";
import TransactionsAnalysisCard from "../components/transactionsAnalysisCard";
import { expenses, stocks, transactions } from "../data";
import QuickTransfers from "../components/QuickTransfers";
import Goals from "../components/Goals";
import MyCards from "../components/myCards";

const Home = () => {
  return (
    <div className="w-[85%] bg-gray-200">
      <Nav />
      <section className="flex-center !items-start h-full">
        <div className="w-3/4 h-full flex flex-col justify-between pl-4 pb-28 pt-4">
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

import React from "react";
import Header from "../components/Header";
import ExTabs from "../components/ExTabs";
import ExpenseChart from "../components/Expense_Distribution/ExpenseChart";
import ExForm from "../components/ExForm";
import ExHistory from "../components/ExHistory";
import ExpenseProvider from "../context/ExpenseContext";

function Index() {
  return (
    <div className="mb-10">
      <ExpenseProvider>
        <Header />
        <ExTabs />
        <div className=" mt-10 flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 w-full">
            <ExpenseChart />
          </div>
          <div className="md:w-1/3 w-full">
            <ExForm />
          </div>
        </div>
        <ExHistory />
      </ExpenseProvider>
    </div>
  );
}

export default Index;

import React from "react";
import ExTabs from "./components/ExTabs";
import ExForm from "./components/ExForm";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <div className="max-w-7xl m-auto px-2">
      <ExTabs />
      <div>
        <ExpenseChart />
        <ExForm />
      </div>
    </div>
  );
}

export default App;

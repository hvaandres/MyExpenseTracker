import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeAndExpenses } from "./components/IncomeAndExpenses";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddNewTransaction } from "./components/AddNewTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <div className="container">
          <Balance />
          <IncomeAndExpenses />
          <TransactionHistory />
          <AddNewTransaction />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;

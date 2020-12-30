import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionsList } from "./components/TransactionsList";
import { AddTransaction } from "./components/AddTransaction";
import DarkMode from "./components/DarkMode/DarkMode";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <DarkMode />
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import IncomePage from "./pages/IncomePage"
import ExpensePage from "./pages/ExpensePage"
import { useState } from "react";

function App() {
  const [incomeEntries, setIncomeEntries] = useState([]);
  const [expenseEntries, setExpenseEntries] = useState([]);

  const addIncome = (amount) => {
    setIncomeEntries([...incomeEntries, amount]);
  };

  const addExpense = (amount) => {
    setExpenseEntries([...expenseEntries, amount]);
  };

  const calculateBalance = () => {
    const totalIncome = incomeEntries.reduce((total, income) => total + income, 0);
    const totalExpense = expenseEntries.reduce((total, expense) => total + expense, 0);
    return totalIncome - totalExpense;
  };


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home totalBalance={calculateBalance()} />} />
          <Route path="/income" element={<IncomePage addIncome={addIncome} />} />
          <Route path="/expense" element={<ExpensePage addExpense={addExpense} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

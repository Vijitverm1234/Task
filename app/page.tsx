'use client'
import { useState } from "react";
import MonthlyExpensesChart from "../components/MonthlyExpensesChart";
import Budget from "./budget/page";

const monthlyExpensesData = [
  { month: 'January', total: 1200 },
  { month: 'February', total: 900 },
  { month: 'March', total: 1300 },
  { month: 'April', total: 1000 },
  { month: 'May', total: 800 },
  { month: 'June', total: 1100 },
  { month: 'July', total: 950 },
  { month: 'August', total: 1400 },
  { month: 'September', total: 1200 },
  { month: 'October', total: 1100 },
  { month: 'November', total: 1150 },
  { month: 'December', total: 1400 },
];

const investmentCategories = [
 
    { name: 'Food', value: 25 },         
    { name: 'Transport', value: 15 },    
    { name: 'Entertainment', value: 10 },
    { name: 'Healthcare', value: 20 }, 
    { name: 'Groceries', value: 20 },   
    { name: 'Personal', value: 10 },     

  
];

export default function HomePage() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(monthlyExpensesData);
  const [budget, setBudget] = useState(1000); 
  const [transactions, setTransactions] = useState([
    { id: 1, amount: 100, date: "2025-02-10", description: "Groceries", category: "Food" },
    { id: 2, amount: 50, date: "2025-02-12", description: "Transport", category: "Transport" },
  ]);

  const totalExpenses = monthlyExpenses.reduce((sum, expense) => sum + expense.total, 0);
  const totalIncome = 5000; // Example total income
  const remainingBudget = budget - totalExpenses; // Calculate remaining budget dynamically
  const totalInvestments = investmentCategories.reduce((sum, category) => sum + category.value, 0);
  const upcomingExpenses = 600; // Example upcoming expenses
  const savingsPercentage = ((totalIncome - totalExpenses) / totalIncome) * 100;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Summary Cards */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Expenses</h2>
          <p className="text-xl font-bold text-red-600">${totalExpenses}</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Income</h2>
          <p className="text-xl font-bold text-green-600">${totalIncome}</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Remaining Budget</h2>
          <p className="text-xl font-bold text-indigo-600">${remainingBudget}</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Investments</h2>
          <p className="text-xl font-bold text-yellow-600">${totalInvestments}</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Upcoming Expenses</h2>
          <p className="text-xl font-bold text-red-500">${upcomingExpenses}</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Savings Percentage</h2>
          <p className="text-xl font-bold text-green-600">{savingsPercentage.toFixed(2)}%</p>
        </div>
      </div>
      <Budget
        monthlyExpenses={monthlyExpenses}
        setMonthlyExpenses={setMonthlyExpenses}
        budget={budget}
        setBudget={setBudget}
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <MonthlyExpensesChart
        data={monthlyExpenses}
        investmentData={investmentCategories}
      />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import TransactionList from "@/components/TransactionList"; // Import TransactionList component

interface BudgetProps {
  monthlyExpenses: { month: string; total: number }[];
  setMonthlyExpenses: React.Dispatch<React.SetStateAction<{ month: string; total: number }[]>>;
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
  transactions: { id: number; amount: number; date: string; description: string; category: string }[];
  setTransactions: React.Dispatch<React.SetStateAction<{ id: number; amount: number; date: string; description: string; category: string }[]>>;
}

const Budget: React.FC<BudgetProps> = ({
  monthlyExpenses,
  setMonthlyExpenses,
  budget,
  setBudget,
  transactions,
  setTransactions,
}) => {
  const [newTransaction, setNewTransaction] = useState({
    amount: 0,
    date: "",
    description: "",
    category: "",
  });

  const addTransaction = () => {
    if (
      newTransaction.amount <= 0 ||
      !newTransaction.date ||
      !newTransaction.description ||
      !newTransaction.category
    ) {
      alert("Please fill in all fields!");
      return;
    }

    const newTrans = {
      id: Date.now(), // Use timestamp to avoid duplicate IDs
      ...newTransaction,
      amount: Number(newTransaction.amount),
    };

    setTransactions([...transactions, newTrans]);
    setNewTransaction({ amount: 0, date: "", description: "", category: "" }); // Reset form
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTransaction((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
      <h3 className="text-lg font-medium">Current Budget: ${budget}</h3>

      {/* Transaction Form */}
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        className="w-full p-2 border rounded mb-2"
        value={newTransaction.amount}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        className="w-full p-2 border rounded mb-2"
        value={newTransaction.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        className="w-full p-2 border rounded mb-2"
        value={newTransaction.description}
        onChange={handleInputChange}
      />
      <select
        name="category"
        className="w-full p-2 border rounded mb-2"
        value={newTransaction.category}
        onChange={handleInputChange}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Groceries">Groceries</option>
        <option value="Personal">Personal</option>
      </select>

      <button onClick={addTransaction} className="w-full p-2 bg-blue-500 text-white rounded">
        Add Transaction
      </button>

      {/* Transaction List */}
      <TransactionList
        transactions={transactions}
        deleteTransaction={(id: number) => setTransactions(transactions.filter((t) => t.id !== id))}
        editTransaction={(id: number) => {
          console.log(`Edit transaction with ID: ${id}`);
        }}
      />
    </div>
  );
};

export default Budget;

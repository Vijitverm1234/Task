'use client'
import React from "react";

interface Transaction {
  id: number;
  amount: number;
  date: string;
  description: string;
  category: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
  editTransaction: (id: number) => void;
}

const TransactionList = ({ transactions, deleteTransaction, editTransaction }: TransactionListProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Transaction List</h3>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <div className="font-semibold">{transaction.description}</div>
              <div className="text-sm text-gray-600">{transaction.date}</div>
            </div>
            <div>
              <span className="text-sm text-gray-800">${transaction.amount}</span>
              <button onClick={() => editTransaction(transaction.id)} className="ml-2 text-blue-500">Edit</button>
              <button onClick={() => deleteTransaction(transaction.id)} className="ml-2 text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

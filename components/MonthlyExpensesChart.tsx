import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export interface MonthlyExpense {
  month: string;
  total: number;
}

export interface InvestmentCategory {
  name: string;
  value: number;
}

interface MonthlyExpensesChartProps {
  data: MonthlyExpense[];
  investmentData: InvestmentCategory[];
}

const MonthlyExpensesChart: React.FC<MonthlyExpensesChartProps> = ({ data, investmentData }) => {
  const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#3B82F6', '#6366F1'];


  const lastSixMonthsData = data.slice(-6);

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Financial Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Monthly Expenses (Last 6 Months)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={lastSixMonthsData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" className="text-gray-600" />
              <YAxis className="text-gray-600" />
              <Tooltip contentStyle={{ backgroundColor: '#f9fafb', border: 'none', borderRadius: '0.375rem' }} />
              <Legend />
              <Bar dataKey="total" name="Expenses" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Investment Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={investmentData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
                labelLine={false}
              >
                {investmentData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#f9fafb', border: 'none', borderRadius: '0.375rem' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MonthlyExpensesChart;

import { useState } from "react"
import Sidebar from "./components/layout/Sidebar"
import Topbar from "./components/layout/Topbar"

import SummaryCard from "./components/dashboard/SummaryCard"
import ChartCard from "./components/dashboard/ChartCard"
import InsightsCard from "./components/dashboard/InsightsCard"

import Filters from "./components/transactions/Filters"
import TransactionTable from "./components/transactions/TransactionTable"
import AddTransactionModal from "./components/transactions/AddTransactionModal"

import { Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react"
import {
  LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer,
} from "recharts";

import { transactions as initialData } from "./data/mockData.js";
import {
  getTotalBalance, getTotalIncome, getTotalExpenses, getCategoryData,
  getMonthlyChartData, getTopSpendingCategory, getSavingsRate,
} from "./utils/calculations.js";

import "./App.css";

function App() {
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [transactions, setTransactions] = useState(initialData);
  const [showModal, setShowModal] = useState(false);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  const filteredTransactions = transactions
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      filterType === "all" ? true : t.type === filterType
    );

  const income = getTotalIncome(transactions);
  const expenses = getTotalExpenses(transactions);
  const balance = getTotalBalance(transactions);
  const categoryData = getCategoryData(transactions);
  const monthlyData = getMonthlyChartData(transactions);
  const topCategory = getTopSpendingCategory(transactions);
  const savingsRate = getSavingsRate(transactions);

  const insights = [
    `You spent the most on ${topCategory.category} (₹${topCategory.amount})`,
    `Your savings rate is ${savingsRate.toFixed(2)}%`,
  ];

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar (hidden on mobile) */}
      <div className="hidden md:block w-64">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col w-full">

        {/* Topbar */}
        <Topbar
          role={role}
          setRole={setRole}
          onAddClick={() => setShowModal(true)}
        />

        {/* Modal */}
        {showModal && (
          <AddTransactionModal
            onAdd={handleAddTransaction}
            onClose={() => setShowModal(false)}
          />
        )}

        {/* Main Content */}
        <main className="p-4 md:p-6 lg:p-8 bg-[#f8fafc] min-h-screen overflow-y-auto">

          <div className="max-w-7xl mx-auto space-y-8">

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SummaryCard
                title="Total Balance"
                amount={balance}
                icon={<Wallet size={20} />}
                color="blue"
              />
              <SummaryCard
                title="Income"
                amount={income}
                icon={<ArrowUpRight size={20} />}
                color="green"
              />
              <SummaryCard
                title="Expenses"
                amount={expenses}
                icon={<ArrowDownRight size={20} />}
                color="red"
              />
            </div>

            {/* Charts + Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Charts */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

                <ChartCard title="Balance Trend">
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={monthlyData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="balance" />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Spending Breakdown">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={80}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={index} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartCard>

              </div>

              {/* Insights */}
              <InsightsCard insights={insights} />

            </div>

            {/* Transactions Section */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 md:p-6 shadow-sm">

              <h2 className="text-lg font-semibold mb-4">
                Transactions
              </h2>

              {/* Filters */}
              <Filters
                search={search}
                setSearch={setSearch}
                filterType={filterType}
                setFilterType={setFilterType}
              />

              {/* Table (responsive wrapper) */}
              <div className="mt-4 overflow-x-auto">
                <TransactionTable transactions={filteredTransactions} />
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App
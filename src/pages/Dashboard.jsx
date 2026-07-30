import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BalanceCard from "../components/BalanceCard";
import SummaryCard from "../components/SummaryCard";
import TransactionCard from "../components/TransactionCard";

import "../css/Dashboard.css";

function Dashboard() {
  const transactions = [
    {
      id: 1,
      title: "Salary",
      amount: 50000,
      type: "Income",
    },
    {
      id: 2,
      title: "Shopping",
      amount: -3000,
      type: "Expense",
    },
    {
      id: 3,
      title: "Food",
      amount: -800,
      type: "Expense",
    },
    {
      id: 4,
      title: "Petrol",
      amount: -1200,
      type: "Expense",
    },
  ];
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <BalanceCard />

        <div className="summary-container">
          <SummaryCard title="Income" amount="50000" />

          <SummaryCard title="Expense" amount="25000" />
        </div>

        <h2>Recent Transactions</h2>

        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            title={transaction.title}
            amount={transaction.amount}
            type={transaction.type}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

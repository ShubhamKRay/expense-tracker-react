import { Link } from "react-router-dom";
import "../css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Expense Tracker</h2>

      <ul>
        <li>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>
        <li>
          <Link to="/wallet">💰 Wallet</Link>
        </li>
        <li>
          <Link to="/transactions">📄 Transactions</Link>
        </li>
        <li>
          <Link to="/">🚪 Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

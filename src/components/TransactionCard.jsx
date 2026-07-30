import "../css/TransactionCard.css";

function TransactionCard({ title, amount }) {
  return (
    <div className="transaction-card">
      <div>
        <h4>{title}</h4>
      </div>

      <h3>₹{amount}</h3>
    </div>
  );
}

export default TransactionCard;

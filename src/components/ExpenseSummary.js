import React from "react";

const ExpenseSummary = ({ expenses }) => {
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div
      style={{
        backgroundColor: "#bcb3a4",
        fontSize: "1.3rem",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <h2>Expense Summary</h2>
      <p>Total Expenses: ${totalExpenses}</p>
    </div>
  );
};

export default ExpenseSummary;

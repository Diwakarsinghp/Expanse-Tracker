import React from "react";
import "./expenseList.css";

const ExpenseList = ({ expenses, setExpenses }) => {
  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div style={{ marginBottom: "6rem" }}>
      <h2 style={{ padding: "0.3rem", margin: "1rem" }}>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li
            className="list"
            key={expense.id}
            style={{ padding: "0.3rem", margin: "1rem" }}
          >
            <span>{expense.title}</span>
            <span>{expense.amount}</span>
            <span>{expense.category}</span>
            <span>{expense.date}</span>
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

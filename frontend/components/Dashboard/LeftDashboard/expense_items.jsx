import React from 'react';

export default ({ expense, deleteExpense}) => {
    return (
        <li className="expense-list-items">
            {expense.desc}
            <button onClick={() => deleteExpense(expense.id)}>x</button>
        </li>
    )
}
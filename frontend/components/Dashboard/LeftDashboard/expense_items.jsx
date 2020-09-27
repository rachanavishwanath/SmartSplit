import React from 'react';
import { dateFormat } from '../../../reducers/format_date/for_expense';
export default ({ expense, deleteExpense}) => {
    return (
        <li className="expense-list-items">
            <div className="summary">
                <div>{dateFormat(expense.date)}</div>
                <div>{expense.category_id}</div>
                <div>{expense.desc}</div>
            </div>
            <div className="expense-summary">
                <button className="delete-expense" onClick={() => deleteExpense(expense.id)}>x</button>
            </div>
        </li>
    )
}
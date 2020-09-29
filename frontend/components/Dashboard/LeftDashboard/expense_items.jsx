import React from 'react';
import { dateFormat } from '../../../reducers/format_date/for_expense';

export default ({ expense, deleteExpense}) => {
    let d = dateFormat(expense.date).split(' ');
    return (
        <li className="expense-list-items">
            <div className="summary">
                <div className="expense-date">
                    <div>{d[0]}</div>
                    <div>{d[1]}</div>
                </div>
                <img src={window.expense} alt="expense-logo"/>
                {/* <div className="expense-cat">{expense.category_id}</div> */}
                <div className="expense-desc">{expense.desc}</div>
            </div>
            <div className="expense-summary">
                <button className="delete-expense" onClick={() => deleteExpense(expense.id)}>x</button>
            </div>
        </li>
    )
}

// make this classical and active flags to show details of expense details
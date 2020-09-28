export const fetchallExpenses = (payable_id) => {
    return $.ajax({
        method: 'GET',
        url: '/api/expenses',
        data: { payable_id }
    })
}

export const fetchExpense = (expenseId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/expenses/${expenseId}`
    })
}

export const createExpense = expense => {
    return $.ajax({
        method: 'POST',
        url: '/api/expenses',
        data: { expense }
    })
}

export const updateExpense = expense => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/expenses/${expense.id}`,
        data: { expense }
    })
}

export const deleteExpense = expenseId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/expenses/${expenseId}`
    })
}

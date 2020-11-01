export const fetchExpenseDetails = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/expense_details`
    })
}

export const createExpenseDetail = (expense_details) => {
    return $.ajax({
        method: 'POST',
        url: '/api/expense_details',
        data: { expense_details }
    })
}

export const updateExpenseDetail = (expense_details) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/expense_details/${expense_details.id}`,
        data: { expense_details }
    })
}
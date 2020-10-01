export const createdAD = (additional_detail) => {
    return $.ajax({
        method: 'POST',
        url: '/api/additional_details',
        data: { additional_detail }
    })
}

export const fetchAllAD = expenseId => {
    return $.ajax({
        method: 'GET',
        url: `/api/expenses/${expenseId}/additional_details`
    })
}

export const deleteAD = adId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/additional_details/${adId}`
    })
}

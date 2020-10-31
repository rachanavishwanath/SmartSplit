export const createdAD = additional_detail => {
    return $.ajax({
        method: 'post',
        url: 'api/additional_details',
        data: additional_detail,
        contentType: false,
        processData: false
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

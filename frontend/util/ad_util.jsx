export const createdAD = (additional_detail) => {
    return $.ajax({
        method: 'POST',
        url: '/api/additional_details',
        data: { additional_detail }
    })
}

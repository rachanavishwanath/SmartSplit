const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
};

const daysOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
};


export const dateFormat = date => {
    let arr = date.split('-');
    let month = months[parseInt(arr[1])];
    return `${month.slice(0, 3).toUpperCase()} ${arr[2]}`
}
// 2020 - 09 - 30T02: 09: 24.687Z
export const formatDate = input => {
    let arr = input.split('-');
    const year = arr[0];
    const month = months[parseInt(arr[1])];
    const date = arr[2].slice(0,2);
    return `${month} ${date}, ${year}`
}

export const forShow = input => {
    let arr = input.split('-');
    let month = months[parseInt(arr[1])];
    month = month.slice(0, 3)
    const date = arr[2].slice(0, 2);
    return `${month} ${date}`
}

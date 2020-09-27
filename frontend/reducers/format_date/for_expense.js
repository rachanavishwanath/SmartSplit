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
    return `${month} ${arr[2]}`
}

// NB: this file is complete - you do not to write/edit anything!

export const formatDate = date => {  
    const obj = new Date(date);
    const month = months[obj.getMonth()];
    const day = obj.getDate();
    const year = obj.getFullYear();
    const dayOfWeek = daysOfWeek[obj.getDay()];
    return `${month} ${day}, ${year} (${dayOfWeek})`;
};

export const formatTime = date => {
    const obj = new Date(date);
    const fullHours = obj.getHours();
    let hours = fullHours % 12;
    if (hours === 0) hours = 12;
    const minutes = obj.getMinutes();
    const tmp = `0${minutes}`;
    const paddedMinutes = tmp.slice(tmp.length - 2);
    const ampm = fullHours < 12 || fullHours === 0 ? 'am' : 'pm';
    return `${hours}:${paddedMinutes}${ampm}`;
};

export const formatDateTime = date => (
    `${formatDate(date)} ${formatTime(date)}`
);

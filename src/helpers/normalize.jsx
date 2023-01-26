
export function formatDate(ISOdate) {
    let date = new Date(ISOdate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export function formatCard(info) {
    let numbers = info.split(" ");
    numbers.slice(-4);
    return numbers[3]
}

export function generateId() {
    return "GZEN" + Math.random().toString(36).substr(2, 9).toUpperCase();
}


export function byDay(data) {
    let currentDate = new Date();
    console.log(data)
    return data.filter(function (obj) {
        let date = new Date(obj.date);
        return date.getDate() === currentDate.getDate() &&
            date.getMonth() === currentDate.getMonth() &&
            date.getFullYear() === currentDate.getFullYear();
    });
}

export function byWeek(data) {
    const today = new Date()
    const newData = data;
    const lastSevenDaysData = [];

    for (let i = 0; i < newData.length; i++) {
        const date = new Date(newData[i].date);
        const differenceInDays = (today - date) / (1000 * 60 * 60 * 24);
        if (differenceInDays <= 7) lastSevenDaysData.push(newData[i])
    }

    return lastSevenDaysData;
}

export function byMonth(data) {
    let currentWeek = new Date();
    let weekStart = new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() - currentWeek.getDay());
    let weekEnd = new Date(currentWeek.getFullYear(), currentWeek.getMonth(), currentWeek.getDate() + (6 - currentWeek.getDay()));
    return data.filter(function (obj) {
        let date = new Date(obj.date);
        return date >= weekStart && date <= weekEnd;
    });
}

export function byDataPhone(data, value) {
    return data.filter(item => item.payment_method.dataphone === true)
}

export function byLink(data, value) {
    return data.filter(item => item.payment_method.link === true)
}


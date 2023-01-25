
let DATE_OBJ = new Date();

const extractDate = (data) => {
    const userDataDate = data.filter((obj) => obj.date);
    return userDataDate.map((obj) => {
        const { date } = obj;
        DATE_OBJ = new Date(date);
        return {
            ...obj,
            date: {
                day: DATE_OBJ.getUTCDate(),
                week: DATE_OBJ.getUTCDay(),
                month: DATE_OBJ.getUTCMonth() + 1,
                year: DATE_OBJ.getUTCFullYear()
            }
        }
    });
}

export function all(data) {
    return data.map(item => item)
}

export function byDay(data) {
    const today = DATE_OBJ.getUTCDate();
    const dataDate = extractDate(data);
    return dataDate.filter(item => item.date.day === today)
}

export function byWeek(data) {
    const lastSevenDaysData = [];
    for (let i = 0; i < data.length; i++) {
        const date = new Date(data[i].date);
        const differenceInDays = (DATE_OBJ - date) / (1000 * 60 * 60 * 24);
        if (differenceInDays <= 7) {
            lastSevenDaysData.push(data[i]);
        }
    }
    return lastSevenDaysData;
}

export function byMonth(data) {
    const dataDate = extractDate(data);
    const currentMonth = DATE_OBJ.getUTCMonth() + 1;
    return dataDate.filter(item => item.date.month === currentMonth)
}

export function byDataPhone(data, value) {
    return data.filter(item => item.payment_method.dataphone === true)
}

export function byLink(data, value) {
    return data.filter(item => item.payment_method.link === true)
}


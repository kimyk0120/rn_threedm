


export function getDate(addDate){
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + addDate);
    return tomorrow.toISOString().slice(0, 10);
}

export function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
}

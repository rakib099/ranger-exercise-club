const addBreakTimeToDb = (breakTime) => {
    localStorage.setItem('breakTime', breakTime);
}
const getItemFromDb = item => {
    return localStorage.getItem(item);
}

export {
    addBreakTimeToDb,
    getItemFromDb
};
const addBreakTimeToDb = (breakTime) => {
    localStorage.setItem('breakTime', breakTime);
}

export {addBreakTimeToDb};
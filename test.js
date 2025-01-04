function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    return `${hour} hour ${remainingSecond} second ago`;
}
console.log(getTimeString(4320));
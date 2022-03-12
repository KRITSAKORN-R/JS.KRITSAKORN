function digitalClock(num) {
    let hour = parseInt(num / 3600);
    num %= 3600 ;

    let minute = parseInt(num / 60);
    let second = (num % 60);

    if(hour >= 24) {
        hour -= 24;
    }
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second;
    }
    return (hour + " : " + minute + " : " + second)
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));
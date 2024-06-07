function daysOfAYear(yer){
     function isLeapYear(year) {
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
    // Check if the given year is a leap year
    if (isLeapYear(year)) {
        return 366;
    } else {
        return 365;
    }
}
const year = prompt("Enter a Year");
alert(daysOfAYear(year));
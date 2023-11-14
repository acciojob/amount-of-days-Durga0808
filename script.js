//your JS code here. If required.
function daysOfAYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

// Do not change the code below
const year = prompt("Enter a year.");
alert(daysOfAYear(year));
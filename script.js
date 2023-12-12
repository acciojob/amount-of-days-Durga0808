function daysOfAYear(yer){
    if(yer%4==0){
        if(yer%100==0){
            if(yer%400==0){
                return 366
            }
            else{
                return 365
            }
        }
        return 366
    }
    else{
        return 365
    }
}
const year = prompt("Enter a Year");
alert(daysOfAYear(year));
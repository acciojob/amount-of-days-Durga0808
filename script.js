function daysOfAYear(year) {
	if((year%4===0 && year%100!==0) || (year%400===0)){
		return 366
	}else{
		return 365
	}
	
}
const result=daysOfAYear(prompt());
alert(result);
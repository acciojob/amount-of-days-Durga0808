function daysOfAYear(year){
	let leapYear=((year%4===0&&year%100!==0)||(year%400===0));
	if(leapYear===true){
		return 366;
	}
	else{
		return 365;
	}
	
}
let year=prompt("Enter the Year");
alert(daysOfAYear(year));
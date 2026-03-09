let nowTimestamp = Date.now();//store the current Date

console.log(nowTimestamp);//unix timestamp in milliseconds 1581291269848

let now = new Date(nowTimestamp);//today's Date object 

//months go from 0 - 11
let date = new Date(2019, 11, 17, 3, 24, 0);//December 17, 2019 03:24:00
//printing the date

console.log(date.toLocaleDateString("en-US"));//12/17/2019
//1 is added to month because January is 0
console.log(` ${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()} `); // 9 - 2 - 2020 

//Calculate difference between two dates in milliseconds
let difference = now - date;
//convert milliseconds to days

let daysBetween = difference * 1.15741e-8;
console.log(daysBetween);//54.6740790437368
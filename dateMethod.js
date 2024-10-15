console.clear();
//Current Date & Time
var date = new Date();
console.log(date);

//Get Month
var month = date.getMonth();
// console.log(month);

switch (month){
    case 0:
        console.log("January");
        break;
    case 1:
            console.log("February");
            break;
    case 2:
             console.log("March");
             break;
    case 3:
             console.log("Aprail");
             break;
     case 4:
             console.log("May");
             break;
     case 5:
             console.log("June");
             break;
     case 6:
             console.log("July");
             break;
     case 7:
             console.log("August");
             break;
     case 8:
             console.log("September");
             break;
    case 9:
             console.log("October");
             break;
     case 10:
             console.log("November");
             break;
     case  11:
             console.log("December");
             break;
}






//Get Date 
var todayDate = date.getDate();
console.log(todayDate);


//Get Day
var day = date.getDay();
switch (day){
    case 0 :
        console.log("Sunday");
        break;
    case 1 :
        console.log("Monday");
        break;
    case 2 : 
        console.log("Tuesday")
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
}

//Get Hour
var hour = date.getHours();
console.log(hour);

//Get Minutes
var minutes = date.getMinutes();
console.log(minutes);

//Get Seconds 
var seconds = date.getSeconds();
console.log(seconds);

//Get MilliSeconds
var milliSeconds = date.getMilliseconds();
console.log(milliSeconds);

//Table
var table = [date,month,todayDate,day,hour,minutes,seconds,milliSeconds];
console.table(table);

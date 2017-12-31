var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if(MINUTE < 30){
    console.log("It's just after " + HOUR + " "+ PERIOD + " in the morning.");
}else if(MINUTE > 30){
    console.log("It's almost " + (HOUR+1) + " "+ PERIOD +  " in the morning.");
}
var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if(MINUTE < 30){
    console.log("It's just after " + HOUR + " "+ PERIOD + " in the evening.");
}else if(MINUTE > 30){
    console.log("It's almost " + (HOUR+1) + " "+ PERIOD +  " in the evening.");
}
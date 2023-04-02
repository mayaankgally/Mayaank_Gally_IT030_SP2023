var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = "Good Morning and welcome to Mayaank's Website!";
else if (hrs >= 12 && hrs <= 16)
    greet = "Good Afternoon and welcome to Mayaank's Website!";
else if (hrs >= 16 && hrs <= 20)
    greet = "Good Evening and welcome to Mayaank's Website!";
else
    greet = "Good Night and welcome to Mayaank's Website!";

document.getElementById('Greetings').innerHTML = '<b>' + greet + '</b>';
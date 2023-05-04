var birthYear = window.prompt("Enter your birth year:");
var birthMonth = window.prompt("Enter your birth month (e.g. Jan):");
var birthDay = window.prompt("Enter your birth day:");

var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();

var birthDate = new Date(birthYear, monthArray.indexOf(birthMonth), birthDay);
var age = currentYear - birthYear;
if (currentMonth < birthDate.getMonth() || (currentMonth === birthDate.getMonth() && currentDay < birthDate.getDate())) {
age--;
}

console.log("You are " + age + " years old.");
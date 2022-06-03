
runClock();
setInterval("runClock()", 1000)

function runClock() {
/*Store the show date and time */
var showDay1 = new Date("October 13, 2022 23:13:00");
var dateStr = showDay1.toLocaleDateString();
var timeStr = showDay1.toLocaleTimeString();

/*Store the show date and time */
var showDay2 = new Date("June 20, 2022 20:30:00");
var dateStr2 = showDay2.toLocaleDateString();
var timeStr2 = showDay2.toLocaleTimeString();

/*Store the show date and time */
var showDay3 = new Date("September 22, 2022 18:15:00");
var dateStr3 = showDay3.toLocaleDateString();
var timeStr3 = showDay3.toLocaleTimeString();

/* Dispaly the current date and time */
document.getElementById("dateNow").innerHTML = dateStr + " " + timeStr;

/* Dispaly the current date and time */
document.getElementById("dateNow1").innerHTML = dateStr2 + " " + timeStr2;

/* Dispaly the current date and time */
document.getElementById("dateNow2").innerHTML = dateStr3 + " " + timeStr3;

}

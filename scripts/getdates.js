const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const todaysdate = new Date();
const dayName = dayNames[todaydate.getDay()];
const monthName = months[todaysdate.getMonth()];
const currentdate = dayName + "," + todaysdate.getDate() + " " + monthName + "," todaysdate.getFullYear();
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

//  https://video.byui.edu/media/t/0_r6j1mjz1
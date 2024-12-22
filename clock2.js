// Calling showDateTime function every second
setInterval(showDateTime, 1000);

// Defining showDateTime function
function showDateTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";
    let dayProgress = (hour * 3600 + min * 60 + sec) / 86400 * 100;
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    // Adding leading zeros
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Formatting the current time
    let currentTime = `${hour}:${min}:${sec} ${am_pm}`;

    // Getting current date
    let day = time.getDate();
    let month = time.toLocaleString('default', { month: 'long' });
    let year = time.getFullYear();

    // Formatting the current date
    let currentDate = ` ${month} ${day}, ${year}`;

    // Displaying the time and date
    document.getElementById("clock").innerHTML = currentTime;
    document.getElementById("date").innerHTML = currentDate;
    document.getElementById('progress-line').style.width = dayProgress + '%';
    if (dayProgress < 10) {
        document.getElementById('message').textContent = "Good Morning! A new day, a new beginning. Let's make it count!";
    } else if (dayProgress > 90) {
        document.getElementById('message').textContent = "Keep Going! You're almost there!";
    } else {
        document.getElementById('message').textContent = ""; 
    }
    if (dayProgress >= 100) {
        document.getElementById('message').textContent = "Good Night! You've had a great day!";
    }
}

// Run immediately on load
showDateTime();
setInterval
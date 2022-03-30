//contador//

// Date and Time for the countdown to end
const launchTime = new Date("October 16, 2022 00:00:00").getTime();

function countDown() {
    const currentTime = new Date().getTime();
    const timeDifference = launchTime - currentTime;

    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    hours = (hours < 10 && hours > 0) ? "0" + hours : hours;
    minutes = (minutes < 10 && minutes > 0) ? "0" + minutes : minutes;
    seconds = (seconds < 10 && seconds > 0) ? "0" + seconds : seconds;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    setTimeout(countDown, 1000);
}
countDown();
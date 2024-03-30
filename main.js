// Function to start the countdown
function startCountdown() {
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Set the date we're counting down to (Change the date to the desired sale end date)
    const countDownDate = new Date("2024-03-31T23:59:59").getTime();

    // Update the countdown every second
    const x = setInterval(function() {

        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time remaining between now and the countdown date
        const distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        daysElement.innerHTML = days;
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            daysElement.innerHTML = "0";
            hoursElement.innerHTML = "0";
            minutesElement.innerHTML = "0";
            secondsElement.innerHTML = "0";
        }
    }, 1000);
}

// Call the function to start the countdown
startCountdown();

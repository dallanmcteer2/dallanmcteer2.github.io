// Function to display race time UTC in local time
function displayUtcTime() {
    // Create a date object for race time UTC
    const utcTime = new Date('January 1, 2000 16:30 UTC');

    // Get the user's local time string without seconds
    const localTimeString = utcTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});

    // Update the HTML element with the local time
    document.getElementById('time').innerText = `${localTimeString}`;
}

// Call the function to display the time
displayUtcTime();
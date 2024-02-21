function closePopOut() {
  document.getElementById("quotePopOut").style.right = "-300px"; // Hide by sliding out
  // Optionally, reset the interval when closed if desired
}

function showPopOut() {
  document.getElementById("quotePopOut").style.right = "0"; // Show by sliding in
}

// Set the modal to appear every few minutes
// 60000 milliseconds in a minute, adjust the multiplier for desired interval
var popOutInterval = setInterval(showPopOut, 15000)
//var popOutInterval = setInterval(showPopOut, 60000 * 1); // Example: every 2 minutes - change 1 to 2

// Optionally, clear the interval under certain conditions to stop the modal from appearing
// clearInterval(popOutInterval);

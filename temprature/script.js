function convertTemperature() {
    // Get the input value
    var celsius = parseFloat(document.getElementById("celsius").value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Perform the conversion
        var fahrenheit = (celsius * 9/5) + 32;

        // Display the result
        document.getElementById("result").innerText = "Result: " + fahrenheit.toFixed(2) + " Fahrenheit";
    } else {
        // Display an error message for invalid input
        document.getElementById("result").innerText = "Invalid input. Please enter a valid number.";
    }
}

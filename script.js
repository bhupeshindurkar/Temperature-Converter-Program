function convertTemp() {

    let temp = parseFloat(document.getElementById("tempValue").value);
    let scale = document.getElementById("scale").value;
    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid temperature value";
        return;
    }

    if (scale === "celsius") {
        let f = (temp * 9 / 5) + 32;
        let k = temp + 273.15;

        result.innerHTML =
            "Fahrenheit: " + f.toFixed(2) + " °F<br>" +
            "Kelvin: " + k.toFixed(2) + " K";
    }

    else if (scale === "fahrenheit") {
        let c = (temp - 32) * 5 / 9;
        let k = c + 273.15;

        result.innerHTML =
            "Celsius: " + c.toFixed(2) + " °C<br>" +
            "Kelvin: " + k.toFixed(2) + " K";
    }

    else if (scale === "kelvin") {
        let c = temp - 273.15;
        let f = (c * 9 / 5) + 32;

        result.innerHTML =
            "Celsius: " + c.toFixed(2) + " °C<br>" +
            "Fahrenheit: " + f.toFixed(2) + " °F";
    }
}

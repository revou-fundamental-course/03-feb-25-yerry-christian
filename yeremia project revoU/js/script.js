document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen dari HTML
    const inputCelsius = document.getElementById("celsius");
    const inputFahrenheit = document.getElementById("fahrenheit");
    const inputCalculation = document.getElementById("calculation");
    const btnConvert = document.getElementById("convert");
    const btnReset = document.getElementById("reset");
    const btnReverse = document.getElementById("reverse");

    // Fungsi Konversi Celsius ke Fahrenheit
    function convertTemperature() {
        let celsius = parseFloat(inputCelsius.value);
        if (isNaN(celsius)) {
            alert("Masukkan suhu dalam Celsius terlebih dahulu!");
            return;
        }
        let fahrenheit = (celsius * 9/5) + 32;
        inputFahrenheit.value = fahrenheit.toFixed(2);
        inputCalculation.value = `${celsius} × 9/5 + 32 = ${fahrenheit.toFixed(2)}`;

        // Efek animasi muncul
        inputFahrenheit.classList.add("pop");
        setTimeout(() => inputFahrenheit.classList.remove("pop"), 500);
    }

    // Fungsi Reset
    function resetFields() {
        inputCelsius.value = "";
        inputFahrenheit.value = "";
        inputCalculation.value = "";
    }

    // Fungsi Reverse Konversi Fahrenheit ke Celsius
    function reverseConversion() {
        let fahrenheit = parseFloat(inputFahrenheit.value);
        if (isNaN(fahrenheit)) {
            alert("Masukkan suhu dalam Fahrenheit terlebih dahulu!");
            return;
        }
        let celsius = (fahrenheit - 32) * 5/9;
        inputCelsius.value = celsius.toFixed(2);
        inputCalculation.value = `(${fahrenheit} - 32) × 5/9 = ${celsius.toFixed(2)}`;

        // Efek animasi muncul
        inputCelsius.classList.add("pop");
        setTimeout(() => inputCelsius.classList.remove("pop"), 500);
    }

    // Tambahkan event listener ke tombol
    btnConvert.addEventListener("click", convertTemperature);
    btnReset.addEventListener("click", resetFields);
    btnReverse.addEventListener("click", reverseConversion);
});

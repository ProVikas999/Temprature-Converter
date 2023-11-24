function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const selectedUnit = document.getElementById('unit').value;
    let convertedTemperature;
    
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid number for temperature.');
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
  
    if (selectedUnit === 'celsius') {
      convertedTemperature = (temperature * 9/5) + 32;
      document.getElementById('result').textContent = `${temperature} Celsius = ${convertedTemperature.toFixed(2)} Fahrenheit`;
    } else if (selectedUnit === 'fahrenheit') {
      convertedTemperature = (temperature - 32) * 5/9;
      document.getElementById('result').textContent = `${temperature} Fahrenheit = ${convertedTemperature.toFixed(2)} Celsius`;
    } else if (selectedUnit === 'kelvin') {
      convertedTemperature = temperature + 273.15;
      document.getElementById('result').textContent = `${temperature} Kelvin = ${convertedTemperature.toFixed(2)} Celsius`;
    }
  }
  
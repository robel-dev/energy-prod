
// A script that generates realistic sensor data for a solar panel:

// Function to generate solar panel data
  function generateSolarData() {
    // Current timestamp
    var timestamp = new Date();
  
    // Get the current weather data
    var weatherData = getWeatherData();
    var temperature = weatherData.temperature;
    var solarRadiation = weatherData.solarRadiation;
    var windSpeed = weatherData.windSpeed;
  
    // Generate current power and energy production based on weather conditions
    var currentPower = calculateCurrentPower(temperature, solarRadiation, windSpeed);
    var energyProduction = calculateEnergyProduction(currentPower);
  
    // Create an object to store the data
    var solarData = {
      "timestamp": timestamp,
      "currentPower": currentPower,
      "energyProduction": energyProduction,
      "temperature": temperature,
      "solarRadiation": solarRadiation,
      "windSpeed": windSpeed
    };
  
    // Return the generated data
    return solarData;
  }
  
  // Function to retrieve current weather data
  function getWeatherData() {



    // Make a request to a weather API to get current weather data
    var weatherData = {
      temperature: Math.random() * (35 - 10) + 10,
      solarRadiation: 600,
      windSpeed: 3
    };
    return weatherData;
  }
  
  // Function to calculate current power based on weather conditions
  function calculateCurrentPower(temperature, solarRadiation, windSpeed) {
    // Use a mathematical model to calculate current power based on weather conditions
    var currentPower = solarRadiation * 0.2 - (temperature - 25) * 0.1 - windSpeed * 0.05;
    return currentPower;
  }
  
  // Function to calculate energy production based on current power
  function calculateEnergyProduction(currentPower) {
    // Use a mathematical model to calculate energy production based on current power
    var energyProduction = currentPower * 0.2;
    return energyProduction;
  }

  // Function to generate solar panel sensor data
function generateSolarPanelData() {
  // Get current time and date
  let timestamp = new Date().toISOString();

  // Generate random values for solar panel parameters
  let energyProduction = (Math.random() * 12).toFixed(2);
  let powerOutput = (Math.random() * 300).toFixed(2);
  let voltage = (Math.random() * 100).toFixed(2);
  let current = (Math.random() * 15).toFixed(2);
  let temperature = (Math.random() * 50).toFixed(2);
  let solarRadiation = (Math.random() * 1000).toFixed(2);

  // Create an object with the generated sensor data
  let data = {
      "timestamp":timestamp,
      "energyProduction": {
          "total": energyProduction,
          "units": "kWh"
      },
      "powerOutput": {
          "current": powerOutput,
          "units": "W"
      },
      "voltageCurrent": {
          "voltage":voltage,
          "current":current,
          "units": {
              "voltage": "V",
              "current": "A"
          }
      },
      "temperature": {
          "panel": temperature,
          "units": "Celsius"
      },
      "solarRadiation": {
          "value": solarRadiation,
          "units": "W/m^2"
      },
      
  };
  return data;
}

// Generate and log the solar panel data
console.log(generateSolarPanelData());



module.exports = generateSolarPanelData

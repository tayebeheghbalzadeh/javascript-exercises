const convertToCelsius = function(temp) {
  // Convert Fahrenheit to Celsius
  const celsius = (temp - 32) * 5 / 9;
  // Round to one decimal place
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  // Convert Celsius to Fahrenheit
  const fahrenheit = (temp * 9 / 5) + 32;
  // Round to one decimal place
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

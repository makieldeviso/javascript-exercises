const convertToCelsius = function(fahrenheitTemp) {

let celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);

if (celsiusTemp !== Math.trunc(celsiusTemp)) {
  return Number(celsiusTemp.toFixed(1));
} else {
  return celsiusTemp;
}
};

const convertToFahrenheit = function(celsiusTemp) {

  let fahrenheitTemp = celsiusTemp * (9 / 5 ) + 32;

  if (fahrenheitTemp !== Math.trunc(fahrenheitTemp)) {
    return Number(fahrenheitTemp.toFixed(1));
  } else {
    return fahrenheitTemp;
  }

};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

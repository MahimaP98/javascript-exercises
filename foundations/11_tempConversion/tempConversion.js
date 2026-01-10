const convertToCelsius = function(F) {
  C = (5/9) * (F - 32);
  C = Math.round(C * 10) / 10;
  return C;
};

const convertToFahrenheit = function(C) {
  F = (C * (9/5)) + 32;
  F = Math.round(F * 10) / 10;
  return F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

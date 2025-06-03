function convertTemp() {
  const inputs = document.querySelectorAll('input.placeh');
  const selects = document.querySelectorAll('select#temp');

  const inputValue = parseFloat(inputs[0].value);
  const fromUnit = selects[0].value;
  const toUnit = selects[1].value;

  if (isNaN(inputValue)) {
    alert("Please enter a valid number.");
    return;
  }

  // Normalize unit names
  const normalize = unit => unit.toLowerCase();

  let tempInCelsius;

  switch (normalize(fromUnit)) {
    case "celsius":
      tempInCelsius = inputValue;
      break;
    case "fahrenheit":
      tempInCelsius = (inputValue - 32) * 5 / 9;
      break;
    case "kelvin":
      tempInCelsius = inputValue - 273.15;
      break;
    default:
      alert("Invalid input unit.");
      return;
  }

  let result;

  switch (normalize(toUnit)) {
    case "celsius":
      result = tempInCelsius;
      break;
    case "fahrenheit":
      result = (tempInCelsius * 9 / 5) + 32;
      break;
    case "kelvin":
      result = tempInCelsius + 273.15;
      break;
    default:
      alert("Invalid output unit.");
      return;
  }

  inputs[1].value = result.toFixed(2);
}
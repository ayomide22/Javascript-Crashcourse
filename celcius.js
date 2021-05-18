
function convertFahrToCelcius(f) {
    let paramType = typeof f;
    let convertedParam = Number(f);
  
    if (paramType !== "number" && isNaN(convertedParam)) {
      return `${JSON.stringify(f)} is not a valid number but a/an ${paramType}.`;
    }
  
    let celcius = ((convertedParam - 32) * 5) / 9;
    return celcius.toFixed(4);
  }
  
  var celcius = convertFahrToCelcius(0);
  
  console.log("celcius: " + celcius);
  
//Convert F to C
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


  const checkYuGiOh = (n) => {    
    const ch = (x) =>{
        return (x%2 === 0 && x%3 === 0 && x%5 === 0) ? "yu-gi-oh"
         :(x%2 === 0 && x%3 === 0) ? "yu-gi"
         : (x%2 === 0 && x%5 === 0) ? "yu-oh"
         : (x%3 === 0 && x%5 === 0) ? "gi-oh"
         : (x%2 === 0) ? "yu"
         : (x%3 === 0) ? "gi"
         : (x%5 === 0) ? "oh"
         : x;
    }
    return (typeof(n) !== 'number')?`Invalid Parameter: "${n}"`
    :(Array.from(Array(n+1).keys()).slice(1)).map(x => ch(x))
}
console.log(checkYuGiOh(10))





  
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    //there's probably a way to call fromEuroToDollar here
    //but it made more sense to me to just figure out the number to multiply by to convert
    let valueInYen = valueInDollar * 106.16;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen / 165.61;
    //found this function thanks to stackoverflow, to round to the hundreds decimal point
    let roundedVal = Math.round(valueInPound*100 + Number.EPSILON)/100;
    console.log(roundedVal);
    return roundedVal;
}
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
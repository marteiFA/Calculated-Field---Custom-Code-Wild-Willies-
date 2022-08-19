(function(quote){
    const hoursCharge = quote.laborHours * quote.hourlyLaborRate
    const len = quote.productsForQuotes.length
    let sum  = 0;
    for (let i = 0; i < len; i++) {
      sum += quote.productsForQuotes[i].netPrice
    }
    const num = sum + hoursCharge
    const calc = num * .10
  if( num >= 10000){
     return 100
  } else if( num >= 4500){
     return 45
  } else{
     return calc
  }
  }(quote));
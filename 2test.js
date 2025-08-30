
//Simple Fun #181: Rounding


function rounding(n, m) {
  let r =  n % m
  let low = n - r
  let high = low + m
  
  if ( r < m - r) {
    return low
  } else if (r > m -r ){
    return high
  } else{
    return n
  }
  
  
}





//Sums of consecutive integers


function position(x, y, n) {
  return (y - x*(x-1)/2 + n*x) / x
}


//Exes and Ohs

//I don`t know

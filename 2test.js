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

// the code works
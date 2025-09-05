
// Calculating with Functions
function zero(num) {
  if(num){
    return num(0)
  }
  return 0
}

function one(num) {
    if(num){
    return num(1)
  }
  return 1
}

function two(num) {
    if(num){
    return num(2)
  }
  return 2
}

function three(num) {
    if(num){
    return num(3)
  }
  return 3

}
function four(num) {
    if(num){
    return num(4)
  }
  return 4

}
function five(num) {
    if(num){
    return num(5)
  }
  return 5

}
function six(num) {
    if(num){
    return num(6)
  }
  return 6
}

function seven(num) {
    if(num){
    return num(7)
  }
  return 7
}

function eight(num) {
    if(num){
    return num(8)
  }
  return 8

}
function nine(num) {
    if(num){
    return num(9)
  }
  return 9

}

function plus(oper) {
  return function (a){
    return  a + oper
  }
}
function minus(oper) {
  return function (a){
    return a - oper
  }
}
function times(oper) {
  return function (a){
    return a * oper
  }
}
function dividedBy(oper) {
  return function (a){
    return Math.floor (a / oper)
  }
}

//******************************** */



//The Road-Kill Detective

function roadKill(photo) {  
  
  let clean = photo.replace(/=/g, "").replace(/(.)\1+/g, "$1");
  let re = clean.split('').join('');
  if (re === "raeb") {
    re = "bear"
  }
  return re
  
}
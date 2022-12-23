//first variant
const isOdd  = function (num) {

  return num % 2 !== 0;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

//second variant
function isOdd (num) {
  if (num % 2 !== 0 ) {
    return true;
  } else {
    return false;
  }
  } 
  console.log("3 is odd: " + isOdd(3));
  console.log("8 is odd: " + isOdd(8));

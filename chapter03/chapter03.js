// Minimum
function min(a, b) {
  if (b === undefined){
    return a;
  } else if (a > b){
    return a;
  }
  return b;
}

// Recursion
function isEven(a){
  if (a == 0) return true;
  if (a == 1) return false;
  if (a < 0) return isEven(-1 * a);
  return isEven(a - 2);
}

// Bean counting
function countChar(phrase, char){
  let n = 0;
  for (let i = 0; i < phrase.length; i++){
    if (phrase[i] == char) n++;
  }
  return n;
}

function countBs(phrase){ return countChar(phrase, "B");}

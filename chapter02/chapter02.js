// Triangle
var triangle = '';
for (let i = 0; i < 7; i = i + 1) {
	console.log(triangle += '#')
}

// FizzBuss
for (let i = 0; i < 100; i = i + 1){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    } else if (i % 3 === 0){
      console.log("Fizz");
    } else if (i % 5 === 0){
      console.log("Buzz");
    } else {
      console.log(i);
    }
}

// Chessboard
let width = 8;
let height = 8;
let chessline = "";
for (let i = 0; i < width; i += 1){
  for (let j = 0; j < height; j += 1){
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        chessline += ' '
      } else {
        chessline += '#'
      }
    } else {
      if (j % 2 === 0) {
        chessline += '#'
      } else {
        chessline += ' '
      }  
    }
  }
      chessline += '\n'
}
console.log(chessline)

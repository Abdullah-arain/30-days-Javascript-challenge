// Task 3

let num1 = 8;
let num2 = 10;
let num3 = 6;

if (num1 > num2) {
  if (num2 > num3) {
    console.log("Number2 is Greater than Number3");
  } else if (num1 > num3) {
    console.log("Number1 is Greater than Number3");
  }
} else if (num1 < num2) {
  if (num2 > num3) {
    console.log("Number2 is Greater than Number3");
  } else if (num1 > num2) {
    console.log("Number1 is Greater than Number2");
  }
}

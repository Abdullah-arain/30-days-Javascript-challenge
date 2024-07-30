// Task 5

let elementOne = [1, 2, 4, 5];
let elementTwo = [6, 7, 8, 9, 10];
let allElement = [...elementOne, ...elementTwo];

console.log(allElement);

// Task 6

function sum(...num) {
  let total = 0;

  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

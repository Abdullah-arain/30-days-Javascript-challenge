// Task 7

let array = [1, 2, 3, 4, 5];

let doubleArray = array.map((n) => {
  return n * 2;
});

console.log(doubleArray);

// Task 8

let filterArray = array.filter((n) => {
    return n % 2 === 0;
})

console.log(filterArray)

// Task 9

let reduceArray = array.reduce((n, v) => {
    return n + v;
})

console.log(reduceArray)
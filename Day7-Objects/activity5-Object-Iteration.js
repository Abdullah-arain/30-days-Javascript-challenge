// Task 8

let book = {
  title: "Rich Dad poor Dad",
  aurthor: "Robert kiyosaki",
  year: 1997,
};

for (const key in book) {
  if (book.hasOwnProperty.call(book, key)) {
    console.log(book[key]);
  }
}

// Task 9

let keys = Object.keys(book);
let values = Object.values(book);

keys.forEach((t) => console.log(t));

for (let value of values) {
  console.log(value);
}

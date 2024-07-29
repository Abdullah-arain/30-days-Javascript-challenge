// Task 3

let book = {
  title: "Rich Dad poor Dad",
  aurthor: "Robert kiyosaki",
  year: 1997,

  titleMethod: function () {
    return "Rich dad poor dad";
  },
};

console.log(book.titleMethod());

// Task 4

let book1 = {
  title: "Rich Dad poor Dad",
  aurthor: "Robert kiyosaki",
  year: 1997,

  updMethod: function (year) {
    this.year = year;
  },
};

book1.updMethod(1998)

console.log(book1);
console.log(book1.year);

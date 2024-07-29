// Task 7

let book = {
  title: "Rich Dad poor Dad",
  aurthor: "Robert kiyosaki",
  year: 1997,

  bookDetails: function () {
    return `The book title is ${this.title} and the year is ${this.year}.`;
  },
};

console.log(book.bookDetails())
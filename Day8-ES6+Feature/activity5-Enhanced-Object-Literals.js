// Task 8

let book = "Rich Dad poor Dad";
let author = "Robert kiyosaki";
let year = 1997;

let bookDetail = {
  book,
  author,
  year,
  bookInfo() {
    console.log(
      `The book ${book} has been published on ${year} and author is ${author}`
    );
  },
};

bookDetail.bookInfo();
console.log(bookDetail);

// Task 9

let propertyOne = "title";
let propertyTwo = "author";

let bookDetails = {
  [propertyOne]: "Rich Dad poor Dad",
  [propertyTwo]: "Robert kiyosaki",
  year: 1997,
};

console.log(bookDetails);
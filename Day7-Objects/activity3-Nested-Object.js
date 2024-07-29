// Task 5

let library = {
  name: "Famouse books",
  books: [
    {
      title: "The dairy of a young girl",
      author: "Anne Frank",
      year: 1947,
    },
    {
      title: "Rich Dad poor Dad",
      aurthor: "Robert kiyosaki",
      year: 1997,
    },
    {
      title: "The dairy of a young girl",
      author: "Anne Frank",
      year: 1947,
    },
  ],
};

console.log(library);

// Task 6

library.books.map((n) => {
  console.log(n.title);
});

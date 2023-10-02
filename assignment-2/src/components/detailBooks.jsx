//detailBooks.jsx
import { useState } from 'react';

let initialBooks = [
  { index: 0, name: "Refactoring", author: "Martin Fowler", topic: "Programming" },
  { index: 1, name: "Designing Data-Intensive Applications", author: "Martin Kleppmann", topic: "Database" },
  { index: 2, name: "The Phoenix Project", author: "Gene Kim", topic: "DevOps" },
  { index: 3, name: "AAA", author: "BBBr", topic: "DevOps" },
  { index: 4, name: "DDD", author: "Mufff", topic: "Programming" },
  { index: 5, name: "EEEE", author: "ABBB", topic: "Programming" },
];

const useBooks = () => {
  const [books, setBooks] = useState(initialBooks);
  const deleteBookById = (index) => {
    console.log(index);
    console.log(books);
    const updatedBooks = books.filter(book => book.index !== index);
    const updatedBooksWithNewIndexes = updatedBooks.map((book, newIndex) => ({ ...book, index: (newIndex + 1) }));
    setBooks(updatedBooksWithNewIndexes);
    console.log(books);
  }
  

  return { books, setBooks, deleteBookById };
}

export default useBooks;

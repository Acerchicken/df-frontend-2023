import React, { useState } from 'react';

interface SearchBooksProps {
  books: {
    name: string;
    author: string;
    topic: string;
  }[];
  setBooks: React.Dispatch<React.SetStateAction<{
    name: string;
    author: string;
    topic: string;
  }[]>>;
}

const SearchBooks: React.FC<SearchBooksProps> = ({ books, setBooks }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const books_cpy = JSON.parse(JSON.stringify(books));

  const searchBooks = () => {
    const lowerCaseSearchValue = searchValue.toLowerCase();
    if (lowerCaseSearchValue) {
      setBooks(books.filter(book => book.name.toLowerCase().includes(lowerCaseSearchValue)));
    } else {
      setBooks(books_cpy);
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchBooks();
    }
  };

  return (
    <div>
      <input
        className="SearchBox"
        placeholder="Search books"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default SearchBooks;

import React, { useState } from 'react';

function SearchBooks({ books, setBooks }) {
  const [searchValue, setSearchValue] = useState('');
  const books_cpy = JSON.parse(JSON.stringify(books));
  const searchBooks = () => {
    const lowerCaseSearchValue = searchValue.toLowerCase();
    if(lowerCaseSearchValue){
      setBooks( books.filter(book => book.name.toLowerCase().includes(lowerCaseSearchValue)) ); 
    }else{
      setBooks (books_cpy);
    }
  };

  const handleKeyUp = (event) => {
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
}
export default SearchBooks;

import React, { useState } from 'react';

function SearchBooks({ setBooks, books }) {
  const [searchValue, setSearchValue] = useState('');
  const [booksBackup] = useState([...books]); // Tạo bản sao sâu của books

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      searchBooks();
    }
  };

  const searchBooks = () => {
    const lowerCaseSearchValue = searchValue.toLowerCase();
    let filteredBooks;

    if (lowerCaseSearchValue) {
      filteredBooks = booksBackup.filter(book => book.name.toLowerCase().includes(lowerCaseSearchValue));
      setBooks(filteredBooks);
    } else {
      setBooks([...booksBackup]); // Trả lại toàn bộ danh sách booksBackup khi searchValue rỗng
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

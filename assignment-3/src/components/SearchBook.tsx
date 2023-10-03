import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Book {
  index: number;
  name: string;
  author: string;
  topic: string;
}

interface SearchBooksProps {
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  books: Book[];
}

function SearchBooks({ setBooks, books }: SearchBooksProps) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [booksBackup] = useState<Book[]>([...books]); // Tạo bản sao sâu của books

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchBooks();
    }
  };

  const searchBooks = () => {
    const lowerCaseSearchValue = searchValue.toLowerCase();
    let filteredBooks: Book[];

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
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}

export default SearchBooks;

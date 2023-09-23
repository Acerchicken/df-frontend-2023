import React from 'react';
import togglePopup from './small func/TogglePopup';

function Table({ books, setBooks, setIndexDelete, currentPage }) {
  const handleDeleteClick = (index) => {
    setIndexDelete(index);
    togglePopup("confirmDeletePopup");
  };

  // Tính toán chỉ hiển thị sách trong trang hiện tại
  const startIndex = (currentPage - 1) * 5;
  const endIndex = Math.min(startIndex + 5, books.length);
  const booksToShow = books.slice(startIndex, endIndex);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
          <th className="column">Name</th>
          <th className="column">Author</th>
          <th className="column">Topic</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {booksToShow.map((book, index) => (
            <tr key={index}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.topic}</td>
              <td>
                <button className="delete-text" onClick={() => handleDeleteClick(index + startIndex)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
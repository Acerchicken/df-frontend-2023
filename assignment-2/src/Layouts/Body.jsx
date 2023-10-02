import React, { useState } from "react";
import togglePopup from "../components/small func/TogglePopup";
import Table from "../components/Table";
import addBookAndClosePopup from "../components/AddBookAndClosePopup";
import SearchBooks from "../components/SearchBook";
import Pagination from "../components/Pagination";
import useBooks from "../components/detailBooks";
//console.log("run");
function Body() {
  const { books, setBooks, deleteBookById} = useBooks();
  const [currentPage, setCurrentPage] = useState(1);
  const [indexDelete, setIndexDelete] = useState(null);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(books.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };  
  
  const handleConfirmDelete = () => {
    if (indexDelete !== undefined) {
      deleteBookById(indexDelete);
      console.log("run");
      togglePopup("confirmDeletePopup");
    }
  };

  return (
    <div className="Body">
      <div className="SandAbooks">
        <SearchBooks setBooks={setBooks} books={books} />  
        <button className="buttAdd" onClick={() => togglePopup("popupMain")}>
          Add Book
        </button>
      </div>

      <div className="popup-content" id="popupMain">
        <span className="close-butt" onClick={() => togglePopup("popupMain")}>
          x
        </span>
        <h2>Add Book</h2>
        <label htmlFor="nameInput">
          <b>Name</b>
        </label>
        <input type="text" id="nameInput" name="nameInput" /><br />
        <label htmlFor="authorInput">
          <b>Author</b>
        </label>
        <input type="text" id="authorInput" name="authorInput" /><br />
        <label htmlFor="topicInput">
          <b>Topic</b>
        </label>
        <input type="text" id="topicInput" name="topicInput" /><br />
        <button className="add-book" onClick={() => togglePopup("DialogConfirm")}>
          Add Book
        </button>
      </div>

      <div className="Dialog" id="DialogConfirm">
        <div>
          <h2>Confirmation</h2>
          <p>Do you want to add this book?</p>
          <button className="Dialog-butt" onClick={() => addBookAndClosePopup(books, document.getElementById('nameInput').value, document.getElementById('authorInput').value, document.getElementById('topicInput').value, setBooks)}>Yes</button>
          <button className="Dialog-butt" onClick={() => togglePopup("DialogConfirm")}>No</button>
        </div>
      </div>

      <div className="Dialog" id="confirmDeletePopup">
        <h1>Delete book</h1>
        <p>Did you want to delete book</p>
        <button className="Dialog-butt" onClick={handleConfirmDelete}>Yes</button>
        <button className="Dialog-butt" onClick={() => togglePopup("confirmDeletePopup")}>Cancel</button>
      </div>
      <Table books={books} setIndexDelete={setIndexDelete} currentPage={currentPage} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Body;

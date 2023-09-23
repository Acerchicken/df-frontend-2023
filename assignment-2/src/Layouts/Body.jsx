import React, { useState } from "react";
import togglePopup from "../components/small func/TogglePopup";
import Table from "../components/Table";
import addBookAndClosePopup from "../components/AddBookAndClosePopup";
import ConfirmedToDelete from "../components/ConfirmedToDelete";
import SearchBooks from "../components/SearchBook.jsx";
import Pagination from "../components/Pagination";

function Body() {
  const [books, setBooks] = useState([
    { name: "Refactoring", author: "Martin Fowler", topic: "Programming" },
    { name: "Designing Data-Intensive Applications", author: "Martin Kleppmann", topic: "Database" },
    { name: "The Phoenix Project", author: "Gene Kim", topic: "DevOps" },
    { name: "AAA", author: "BBBr", topic: "DevOps" },
    { name: "DDD", author: "Mufff", topic: "Programming" },
    { name: "EEEE", author: "ABBB", topic: "Programming" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [indexDelete, setIndexDelete] = useState(null);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(books.length / itemsPerPage);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="Body">
      <div className="SandAbooks">
        <SearchBooks books={books} setBooks={setBooks} />
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
        <button className="Dialog-butt" onClick={() => ConfirmedToDelete(books, setBooks, indexDelete)}>Yes</button>
        <button className="Dialog-butt" onClick={() => togglePopup("confirmDeletePopup")}>Cancel</button>
      </div>
      <Table books={books} setBooks={setBooks} setIndexDelete={setIndexDelete} currentPage={currentPage} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Body;

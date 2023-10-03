import React, { useState } from 'react';
import togglePopup from '../components/small func/TogglePopup';
import Table from '../components/Table';
import addBookAndClosePopup from '../components/AddBookAndClosePopup';
import SearchBooks from '../components/SearchBook';
import Pagination from '../components/Pagination';
import useBooks from '../components/detailBooks';

function Body() {
  const { books, setBooks, deleteBookById } = useBooks();
  const [currentPage, setCurrentPage] = useState(1);
  const [indexDelete, setIndexDelete] = useState<null | number>(null);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(books.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleConfirmDelete = () => {
    if (indexDelete !== null) {
      deleteBookById(indexDelete);
      // console.log('run');
      togglePopup('confirmDeletePopup');
    }
  };
  const onKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      togglePopup('popupMain');
    }
  };

  return (
    <div className='Body'>
      <div className='SandAbooks'>
        <SearchBooks setBooks={setBooks} books={books} />  
        <button className='buttAdd' onClick={() => togglePopup('popupMain')}>
          Add Book
        </button>
      </div>

      <div className='popup-content' id='popupMain'>
        <span 
          className='close-butt' 
          onClick={() => togglePopup('popupMain')}
          onKeyPress={onKeyPressHandler}
          role='button'
          tabIndex={0}
        >
          x
        </span>
        <h2>Add Book</h2>
        <label htmlFor='nameInput'>
          <b>Name</b>
          <input type='text' id='nameInput' name='nameInput' />
        </label>
        
        <br />
        <label htmlFor='authorInput'>
          <b>Author</b>
          <input type='text' id='authorInput' name='authorInput' />
        </label>
        
        <br />
        <label htmlFor='topicInput'>
          <b>Topic</b>
          <input type='text' id='topicInput' name='topicInput' />
        </label>
        
        <br />
        <button className='add-book' onClick={() => togglePopup('DialogConfirm')}>
          Add Book
        </button>
      </div>

      <div className='Dialog' id='DialogConfirm'>
        <div>
          <h2>Confirmation</h2>
          <p>Do you want to add this book?</p>
          <button className='Dialog-butt' onClick={() => addBookAndClosePopup(books, (document.getElementById('nameInput') as HTMLInputElement).value, (document.getElementById('authorInput') as HTMLInputElement).value, (document.getElementById('topicInput') as HTMLInputElement).value, setBooks)}>Yes</button>
          <button className='Dialog-butt' onClick={() => togglePopup('DialogConfirm')}>No</button>
        </div>
      </div>

      <div className='Dialog' id='confirmDeletePopup'>
        <h1>Delete book</h1>
        <p>Did you want to delete book</p>
        <button className='Dialog-butt' onClick={handleConfirmDelete}>Yes</button>
        <button className='Dialog-butt' onClick={() => togglePopup('confirmDeletePopup')}>Cancel</button>
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

import togglePopup from "./small func/TogglePopup";

const ConfirmedToDelete = (books, setBooks,indexDelete) => {
  if (indexDelete !== undefined) {
    const updatedBooks = books.filter((_, index) => index !== indexDelete);
    setBooks(updatedBooks);
    togglePopup("confirmDeletePopup");
  }
}

export default ConfirmedToDelete;

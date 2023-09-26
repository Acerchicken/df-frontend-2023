import togglePopup from "./small func/TogglePopup";

interface Book {
  name: string;
  author: string;
  topic: string;
}

const ConfirmedToDelete = (books: Book[], setBooks: React.Dispatch<React.SetStateAction<Book[]>>, indexDelete: number | undefined) => {
  if (indexDelete !== undefined) {
    const updatedBooks = books.filter((_, index) => index !== indexDelete);
    setBooks(updatedBooks);
    togglePopup("confirmDeletePopup");
  }
}

export default ConfirmedToDelete;

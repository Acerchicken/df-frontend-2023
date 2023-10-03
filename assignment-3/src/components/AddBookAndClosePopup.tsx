import togglePopup from './small func/TogglePopup';

interface Book {
  index: number;
  name: string;
  author: string;
  topic: string;
}

function AddBookAndClosePopup(books: Book[], name_cpy: string, author_cpy: string, topic_cpy: string, setBooks: React.Dispatch<React.SetStateAction<Book[]>>) {
  const newBook: Book = {
    index: books.length,
    name: name_cpy,
    author: author_cpy,
    topic: topic_cpy,
  };
  const updatedBooks = [...books, newBook];
  setBooks(updatedBooks);

  // Đoạn mã này sẽ chạy sau khi trạng thái đã được cập nhật
  const nameInput = document.getElementById('nameInput') as HTMLInputElement;
  const authorInput = document.getElementById('authorInput') as HTMLInputElement;
  const topicInput = document.getElementById('topicInput') as HTMLInputElement;

  if (nameInput && authorInput && topicInput) {
    nameInput.value = '';
    authorInput.value = '';
    topicInput.value = '';
  }

  togglePopup('DialogConfirm');
  togglePopup('popupMain');
}

export default AddBookAndClosePopup;

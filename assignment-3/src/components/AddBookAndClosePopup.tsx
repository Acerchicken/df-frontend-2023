import React from 'react';
import togglePopup from './small func/TogglePopup';

interface AddBookAndClosePopupProps {
  books: Book[];
  name_cpy: string;
  author_cpy: string;
  topic_cpy: string;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

interface Book {
  name: string;
  author: string;
  topic: string;
}

const AddBookAndClosePopup: React.FC<AddBookAndClosePopupProps> = ({ books, name_cpy, author_cpy, topic_cpy, setBooks}) => {
  const newBook = {
    name: name_cpy,
    author: author_cpy,
    topic: topic_cpy,
  };
  const updatedBooks = [...books, newBook];
  setBooks(updatedBooks);

  // ...

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

  return <></>; // Trả về một phần tử JSX trống (hoặc thay bằng phần tử JSX khác nếu cần)
};

export default AddBookAndClosePopup;

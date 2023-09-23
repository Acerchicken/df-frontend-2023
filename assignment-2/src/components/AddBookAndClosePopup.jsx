import togglePopup from './small func/TogglePopup';


function AddBookAndClosePopup(books, name_cpy, author_cpy, topic_cpy, setBooks) {
  const newBook = {
    name: name_cpy,
    author: author_cpy,
    topic: topic_cpy,
  };
  const updatedBooks = [...books, newBook];
  setBooks(updatedBooks);
    // Đoạn mã này sẽ chạy sau khi trạng thái đã được cập nhật
  document.getElementById('nameInput').value = "";
  document.getElementById('authorInput').value = "";
  document.getElementById('topicInput').value = "";
  togglePopup("DialogConfirm");
  togglePopup("popupMain");
}

export default AddBookAndClosePopup;

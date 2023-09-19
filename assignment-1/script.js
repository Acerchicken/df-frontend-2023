// Your JS code goes here

//Nhập input để Search
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchBooks();
    }
});

// Hàm tìm kiếm sách
function searchBooks() {
    // Lấy giá trị từ trường input
    let searchValue = document.getElementById('searchInput').value.toLowerCase();
    if (searchValue === "") {
        restoreInitialBooks();
        return;
    }
    // Tìm kiếm sách chỉ dựa trên trường name
    books = books.filter(book => 
        book.name.toLowerCase().includes(searchValue)
    );
    // Gọi hàm để cập nhật bảng với kết quả tìm kiếm
    renderTable();
}

// Hàm khôi phục danh sách ban đầu
function restoreInitialBooks() {
    books = [...initialBooks];
    renderTable();
}

// Hiện pop-up
function togglePopup(popupID){
    popupID.classList.toggle("active");
}

//Thêm sách
function addBookAndClosePopup(name_cpy, author_cpy, topic_cpy) {
    // Lấy giá trị từ các trường input

    let newBook = {
        name: name_cpy,
        author: author_cpy,
        topic: topic_cpy,
    };
    books.push(newBook);
    //Reset input
    document.getElementById('nameInput').value = "";
    document.getElementById('authorInput').value = "";
    document.getElementById('topicInput').value = "";
    // Đóng popup
    togglePopup(DialogConfirm);
    togglePopup(popupMain);
    renderTable();
}

// Xác nhận xóa cuốn sách
function deleteConfirmed() {
    if (typeof bookToDeleteIndex !== 'undefined'){
        books.splice(bookToDeleteIndex, 1);
        renderTable(); // Cập nhật lại bảng
        togglePopup(confirmDeletePopup); // Đóng dialog xác nhận
        bookToDeleteIndex = undefined; // Đặt lại giá trị của biến
    }
}

//Khai báo Mảng object Books
let books = [
    { name: "Refactoring", author: "Martin Fowler", topic: "Programming" },
    { name: "Designing Data-Intensive Applications", author: "Martin Kleppmann", topic: "Database" },
    { name: "The Phoenix Project", author: "Gene Kim", topic: "DevOps" }
];
//Chỉ số của sách cần xoá
let bookToDeleteIndex;
//Clone danh sách để back-up
let initialBooks = [...books];

let bookTableBody = document.getElementById('bookTableBody');
//Duyệt từng phần tử book
for (let [index, book] of books.entries()) {
    let row = bookTableBody.insertRow();
        
    let nameCell = row.insertCell();
    nameCell.textContent = book.name;
            
    let authorCell = row.insertCell();
    authorCell.textContent = book.author;
            
    let topicCell = row.insertCell();
     topicCell.textContent = book.topic;
            
    //Cột Action
    let actionCell = row.insertCell();
    let deleteButton = document.createElement("span");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-text");
    // Thực hiện hành động xoá object
    deleteButton.addEventListener("click", function() {
    //Xoá 1 phần tử bắt đầu từ vị trí thứ index+1
    bookToDeleteIndex = index;
    togglePopup(confirmDeletePopup);
    });
    actionCell.appendChild(deleteButton);
};


//Cập nhật lại bảng
function renderTable(){
    let bookTableBody = document.getElementById('bookTableBody');
    console.log('Rendered books:', books); // Kiểm tra dữ liệu trước khi cập nhật
    let tableHTML = books.map((book, index) => `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.topic}</td>
            <td>
                <span class="delete-text" onclick="deleteBook(${index})">Delete</span>
            </td>
        </tr>
    `).join('');

    bookTableBody.innerHTML = tableHTML;
}








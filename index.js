// JAVASCRIPT CODE
let books = [];
const book1 = {title: "The Lord of the Rings", author: "J.R.R. Tolkien"};
const book2 = {title: "The Little Prince", author: "Antoine de Saint-Exupéry"};
const book3 = {title: "Nineteen Eighty-Four", author: "George Orwell"};
books.push(book1);
books.push(book2);
books.push(book3);
// console.log(books);

// LIST BOOKS IN THE PAGE
function loadBooks() {
  for (let i = 0; i < books.length; i += 1) {
    const bookSection = document.getElementById('main');
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('bookDiv');
    bookDiv.innerHTML += `
      <p>${books[i].title}</p>
      <p>${books[i].author}</p>
      <button>Remove</button>
      <hr>
    `;
    bookSection.appendChild(bookDiv);
  };

  const bookSection2 = document.getElementById('main');
  const myForm = document.createElement('form');
  myForm.innerHTML += `
    <br>
    <div class=formDiv>
      <input id="bookTitle" class="myInput" type="text" placeholder="Title..." maxlength="50"></input><br>
      <input id="bookAuthor" class="myInput" type="text" placeholder="Author..." maxlength="50"></input><br>
      <button id="addBtn" class="button2" type="button">Add book</button>
    </div>
  `;
  myForm.classList.add('myform');
  bookSection2.appendChild(myForm);

  const buttonAdd = document.querySelector('#addBtn');
  buttonAdd.addEventListener('click', () => {
    // const myForm = document.querySelector('.myForm');
    const titleAdd = document.querySelector('#bookTitle').value;
    const authorAdd = document.querySelector('#bookAuthor').value;
    const myBook = { title: titleAdd, author: authorAdd };
    books.push(myBook);
    console.log(books);
    localStorage.setItem('myBooks', JSON.stringify(books)); //myBook
  });
}

// GET ARRAY FROM LOCAL STORAGE
const arrayString = localStorage.getItem('myBooks');
const arrayBooks = JSON.parse(arrayString);

books.push(arrayBooks);
console.log(books);


// LOAD EVENT - LOAD LIST OF BOOKS FROM ARRAY
window.addEventListener('load', () => {
  loadBooks();
});

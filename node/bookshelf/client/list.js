

const loadBooks = () => {
    // jquery

    $.ajax ({
        type: "GET",
        url:"http://localhost:3001/books/",
        dataType:"json",
        success: function (response) {
            console.log('ajax books',response);
        },

      });

      //javascript
      const xhttp = new XMLHttpRequest();
      xhttp.open('GET', 'http://localhost:3001/books', false);
      xhttp.send();

      const books = JSON.parse(xhttp.responseText);
      console.log('books:' ,books);

let allBooksHtml ='';
books.forEach(book => {  

    allBooksHtml +=`<div class="card" style="width:18rem; margin: 15px; float:left;">
    <div class="card-body">
      <h5 class="card-title">${book.title}Card title</h5>
      <p class="card-text">${book.author}</p>
      <p class="card-text">${book.isbn},Year; ${book.published_year}, Pages: ${book.numOfPages}</p>
      <a href="#" class="btn btn-primary">Edit Book</a>
      <a href="#" class="btn btn-danger"Delete Book onclick="deleteBook(${book.isbn})">Delete Books</a>
    </div>
  </div> `;
    
});

document.getElementById('books').innerHTML = allBooksHtml;
 }
 const deleteBook = (isbn) =>{
    
    const xhttp = new XMLHttpRequest();
    xhttp.open('DELETE', 'http://localhost:3001/book/' + isbn, false);
    xhttp.send();
    location.reload();
 };

loadBooks();


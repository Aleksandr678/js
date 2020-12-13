

const loadBooks = () => {
  // jquery

  $.ajax({
    type: "GET",
    url: "http://localhost:3001/books/",
    dataType: "json",
    success: function (response) {
      console.log('ajax books', response);
    },

  });

  //javascript
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'http://localhost:3001/books', false);
  xhttp.send();

  const books = JSON.parse(xhttp.responseText);
  console.log('books:', books);

  let allBooksHtml = '';
  books.forEach(book => {

    allBooksHtml += `<div class="card" style="width:18rem; margin: 15px; float:left;">
    <div class="card-body">
      <h5 class="card-title">${book.title}Card title</h5>
      <p class="card-text">${book.author}</p>
      <p class="card-text">${book.isbn},Year; ${book.published_year}, Pages: ${book.numOfPages}</p>
      <a href="#" class="btn btn-primary edit" data-isbn="${book.isbn}">Edit Book</a>
      <a href="#" class="btn btn-danger"Delete Book onclick="deleteBook(${book.isbn})">Delete Books</a>
    </div>
  </div> `;

  });

  document.getElementById('books').innerHTML = allBooksHtml;
}
const deleteBook = (isbn) => {

  const xhttp = new XMLHttpRequest();
  xhttp.open('DELETE', 'http://localhost:3001/book/' + isbn, false);
  xhttp.send();
  location.reload();
};

loadBooks();

// on page load also book form
$.ajax({
  type: "GET",
  url: "form.html",
  dataType: "html",
  success: function (response) {
    let modalBody = document.querySelector('#exampleModal .modal-body');
    modalBody.innerHTML = response;

  },
  error: function (err, status, message) {

  }

});

$(document).on('submit', '#frmBook', function () {


  console.log('form submitted');

  let title = document.getElementById()

  $.ajax({
    type: "POST",
    url: "http://localhost:3001/book/new",
    data: $('#frmBook').serialize(),
    dataType: "json",
    success: function (response) {
      console.log('sucessfull response !');


    },
    error: function (err, status, message) {

      console.log('');

    }
  })

})


$('.edit').on('click', function () {
  let isbn = this.dataset.isbn
  console.log('isbn', isbn);

  $('#exampleModal').modal({
    keyboard: false

  })




  $('#exampleModal').on('shown.bs.modal', function (event) {
    // do something...
    
    console.log('isbn',isbn);
    console.log('modal edit shown');

    document.getElementById('isbn').setAttribute("readonly", "readonly");
    document.querySelector("#exampleModalLabel" ).innerHTML = 'Edit book'
    document.querySelector('button[type=submit]').innerHTML= "Edit book";


    $.ajax({ 
      type: "GET",
      url: "http://localhost:3001/book/" + isbn,
    
      
      dataType: "json",
      success: function (response) {
        //console.log('sucessfull response !');

  document.getElementById('isbn').value = response.isbn;
  document.getElementById('title').value = response.title;
  document.getElementById('author').value = response.publish_year;
  document.getElementById('publish_year').value = response.numOfPages;

  
      },
      error: function (err, status, message) {
  
        console.log('');    }

  })
  console.log()

});
});



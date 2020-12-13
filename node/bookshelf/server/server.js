
const serverExpress = require('express'); // expressjs
const bodyParser = require('body-parser');
const { response } = require('express');

const app = serverExpress();
const port = 3001; 

app.use(bodyParser.urlencoded({extended:true}));

let books = [
    {
        isbn:'123456789',
        title:'first book',
        author:'vladimir kjahrenov',
        publish_year: '2020',
        numOfPages:250
    },
    {
        isbn:'975318642',
        title:'second book',
        author:'vladimir1 kjahrenov',
        publish_year: '2021',
        numOfPages:350
    },
    {
        isbn:'135790000',
        title:'third book',
        author:'vladimir2 kjahrenov',
        publish_year: '2022',
        numOfPages:450
    }
];

app.get('/books', (request, response) => { // callback
    console.log(books);
    response.send(books);
});

app.get('/book/:isbn', (request, response) => {

    console.log('exact book: ' + request.params.isbn);
    let result = false;

    books.forEach(book => {
    

    if (book.isbn == request.params.isbn)
    {
       response.send(book);
       result = true;
    }
 })

if (result == false) response.status(404).send("this book is not found");

});


app.listen(port, () => console.log(`im listening port ${port}`));

app.delete('/book/:isbn', (request, response) => {

    console.log('exact book: ' + request.params.isbn);
    let result = false;
    
    books.forEach((book,index ) => {
    

    if (book.isbn == request.params.isbn)
    {
        books.splice(index, 1);
        response.status(200).send("book is deleted successfuly");
       
       result = true;
    }
 })

if (result == false) response.status(404).send("this book is not found");

});

app.post('/book/new' , (request, response) => {


    console.log(request.body)
    

let book = {
    isbn: request.body.isbn,
    title: request.body.title,
    author: request.body.publish_year,
    publish_year: request.body.numOfPages

}



books.push (book);

let result = 'new book succeffully saved!';
console.log (result);
response.status (200).send(result);

 });

app.post('/book/new' , (request, response) => {


    console.log(request.body)
    //response.send('hello from hell!');


});


app.post('/book/edit', (request, response) => {

  
    let result = false;
    
    books.forEach((book,index ) => {
    

    if (book.isbn == request.body.isbn)
    {
        books[index].isbn = request.body.isbn;
        books[index].title = request.body.isbn;
        books[index].author = request.body.author;
        books[index].publish_year = request.body.publish_year;
        books[index].numOfpages = request.body.numOfPages;


        response.status(200).send("book is deleted successfuly");
       
       result = true;
    }
 })

})

const ui = new UI()
const ls = new LS()

const form = document.querySelector('#book-form')
form.addEventListener('submit', addBook)

document.addEventListener('DOMContentLoaded', getBooks)

const booksTabel = document.querySelector('#books')
booksTabel.addEventListener('click', deleteBook)

function deleteBook(event) {
    if(event.target.textContent === 'X'){
        if (confirm("Do you want to remove this book?")){
            const deleteBook = ui.deleteBook(event.target)
        }
    }
}

function getBooks(){
    let books = ls.getBooks()
    books.forEach(function(book){
        ui.addBook(book)
    })
}

function addBook(event){
    // read user inputs
    const title = ui.getInputData('#title')
    const author = ui.getInputData('#author')
    const isbn = ui.getInputData('#isbn')

    const book = new Book(title, author, isbn)
    ui.addBook(book)
    ls.addBook(book)

    ui.clearInputData('#title')
    ui.clearInputData('#author')
    ui.clearInputData('#isbn')

    event.preventDefault()
}
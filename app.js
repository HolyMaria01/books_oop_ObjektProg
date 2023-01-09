const ui = new UI()
const ls = new LS()

const form = document.querySelector('#book-form')
form.addEventListener('submit', addBook)
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
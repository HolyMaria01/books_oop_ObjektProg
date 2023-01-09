class LS {
    addBook(book){
        let books // array for user inputs
        if(localStorage.getItem('books_oop') === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books_oop'))
        }
        let books = this.getData('book_oop')
        books.push(book)
        this.setData('books_oop, books')
    }

    getData(name){
        let data // array for user inputs
        if(localStorage.getItem('name') === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem('name'))
        }
        return data
    }
    setData(name, data){
        localStorage.setItem('books_oop', JSON.stringify(books))
    }
}
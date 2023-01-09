class UI{
    addBook(book){
        const bookRow = document.createElement('tr')
        bookRow.innerHTML = `
                        <td>${book.title}</td>
                        <td>${book.author}</td>   
                        <td>${book.isbn}</td>   
                        <td><a href="#">X</a></td>`
        const booksTable = document.querySelector('#books')
        booksTable.appendChild(bookRow)
    }

    getInputData(selector){
        return document.querySelector(selector).value
    }

    clearInputData(selector){
        document.querySelector(selector).value = ''
    }
}
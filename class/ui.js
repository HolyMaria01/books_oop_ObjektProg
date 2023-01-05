class UI{
    addBook(book){
        const bookRow = document.createElement('tr')
        bookRow.innerHTML = `
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="#">X</a></td>`
        const booksTabel = document.querySelector('#books')
        booksTabel.appendChild(bookRow)
    }

    getInputData(selector){
        return document.querySelector(selector)
    }
    clearInputData(selector){
        document.querySelector(selector).value = ''
    }
}
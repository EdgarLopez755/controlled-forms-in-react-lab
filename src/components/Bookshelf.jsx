import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({title: '', author: ''})
    }


    return (
        <div className='bookshelfDiv'>
            <div className='formDiv'>
                <h3>Add a Book 📚</h3>
                <input
                    type='text'
                    name='title'
                    value={newBook.title}
                    onChange={handleInputChange}
                    placeholder='Title'
                />
                <input 
                    type='text'
                    name='author'
                    value={newBook.author}
                    onChange={handleInputChange}
                    placeholder='Author'
                />
                <button onClick={handleSubmit}>Add Book</button>
            </div>
            <div className='bookCardsDiv'>
                {books.map((book, index) => (
                    <div key={index} className='bookCard'> 
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bookshelf;


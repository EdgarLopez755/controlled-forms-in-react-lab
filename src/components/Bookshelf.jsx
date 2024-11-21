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

    const handleSubmit = () => {
        setBooks([...books, newBook])
        setNewBook({title: '', author: ''})
    }

    return (
        <div></div>
    )
}
import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBook] = useState([])
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value })
    }

    const handleSubmit
}
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import ReadingYears from "../components/ReadingYears";

const Bookslist = (props) => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const booksList = await fetch(`http://localhost:8000/api/books/year/2025`, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer" + localStorage.getItem('token'),
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            return data;
        })

        setBooks(booksList);
    }

    useEffect(() => {
        getBooks();
    }, [])

    return(
        <React.Fragment>
            <Header />
            <div className="container">
                <ReadingYears />
                <div className="bookslist">
                    <button className="btn btn-green add-book"><i className="fa-solid fa-plus"></i> Toevoegen</button>
                    <h3>Gelezen boeken</h3>
                    <table id="DataTable" className="display" width="100%">
                        <thead>
                            <tr>
                                <th>Boek</th>
                                <th>Schrijver</th>
                                <th>Genre</th>
                                <th>Gelezen</th>
                                <th>Rating</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-content">
                            {books.map((book, i) => {
                                let dotColor = book.genre === 'Thriller' ? "rgb(62,69,113)" : (book.genre === "Roman" ? "rgb(16, 115, 95)" : (book.genre === "Non-fictie" ? "rgb(220,116,105)" : "rgb(146,48,67)"));

                                return (
                                    <tr key={i}>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <td><div className="catColor" style={{ background: dotColor }}>{book.genre}</div></td>
                                        <td>{new Date(book.readed).toLocaleString('default', { month: 'long' }) + " " + new Date(book.readed).getFullYear()}</td>
                                        <td className="rating">
                                            {[...Array(book.rating)].map((_, i) => (
                                                <i key={i} className="fa-solid fa-star"></i>
                                            ))}
                                        </td>
                                        <td><button className="delete-book"><i className="fa-solid fa-trash-can"></i></button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <AddBook />
        </React.Fragment>
    )
}

export default Bookslist;
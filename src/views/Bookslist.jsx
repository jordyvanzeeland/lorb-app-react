import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import ReadingYears from "../components/ReadingYears";
import { getBooksByYear, currentlyReading } from "../data/Books";

const Bookslist = (props) => {
    const [books, setBooks] = useState([]);
    const [current, setCurrent] = useState([]);

    const getBooks = async (year) => {
        const booksList = await getBooksByYear(year);
        setBooks(booksList);
    }

    const getCurrentReading = async () => {
        const currentBook = await currentlyReading();
        console.log(currentBook);
        setCurrent(currentBook);
    }

    useEffect(() => {
        getCurrentReading();
        getBooks(localStorage.getItem('year') ? localStorage.getItem('year') : new Date().getFullYear() );

        document.querySelector('.readingyears').addEventListener('click', function(event) {
            if (event.target.classList.contains('yearbtn')) {
                
                for (var item of event.target.parentNode.children) {
                    item.classList.remove('current');
                }
                
                event.target.classList.add('current');
                
                const clickedyear = event.target.dataset.id;
                localStorage.setItem('year', clickedyear);
                getBooks(clickedyear);
            }
        });
    }, [])

    return(
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="currentlyReading"><strong>Currently Reading:</strong> {current && current[0] ? current[0].name + '-' + current[0].author : ''}</div>
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
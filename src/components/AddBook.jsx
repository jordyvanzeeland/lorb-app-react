import React, { useEffect, useState } from "react";

const AddBook = (props) => {
    return(
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">Boek toevoegen</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form method="POST" id="addbook">
                            <div className="mb-3">
                                <label htmlFor="book" className="form-label">Boek</label>
                                <input type="text" className="form-control" name="book" id="book" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="author" className="form-label">Schrijver</label>
                                <input type="text" className="form-control" name="author" id="author" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="genre" className="form-label">genre</label>
                                <input type="text" className="form-control" name="genre" id="genre" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="readed" className="form-label">Gelezen op</label>
                                <input type="text" className="form-control" name="readed" id="readed" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="rating" className="form-label">Aantal sterren</label>
                                <input type="text" className="form-control" name="rating" id="rating" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="en" className="form-label">Engels</label>
                                <input type="text" className="form-control" name="en" id="en" required/>
                            </div>
                            <button type="submit" className="btn btn-green">Toevoegen</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook;
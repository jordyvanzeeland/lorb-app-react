export const getBooksByYear = async (year) => {
    return await fetch(`http://localhost:8000/api/books/year/${year}`, {
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
}

export const currentlyReading = async () => {
    return await fetch(`http://localhost:8000/api/current`, {
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
}
import React, { useEffect, useState } from "react";

const ReadingYears = (props) => {
    const [years, setYears] = useState([]);

    const getYears = async() => {
        const readingYears = await fetch(`http://localhost:8000/api/years`, {
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

        setYears(readingYears);
    }

    useEffect(() => {
        getYears();

        if(!localStorage.getItem('year')){
            localStorage.setItem('year', new Date().getFullYear());
        }
    }, [])

    return(
        <div className="readingyears">
            {years.map((year, i) => {
                return (
                    <li key={i} data-id={year.year} className={`yearbtn ${year.year == localStorage.getItem('year') ? "current" : ''}`}>{year.year}</li>
                )
            })}
        </div>
    )
}

export default ReadingYears;
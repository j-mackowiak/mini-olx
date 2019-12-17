import React from 'react';
import './SearchResults.css';
import { Link } from "react-router-dom";

function SearchResults(props) {
    const { ads } = props;

    if (ads) {
        return (
            <div id='results-wrapper'>
                {ads.map(ad => (
                    <Link key={ad.id} to={`/advertisements/${ad.id}`} className='ad'>
                        <h2>{ad.title}</h2>
                        <h4>Kategoria: {ad.category}</h4>
                        <p>Opis: {ad.description}</p>
                    </Link>
                ))}
            </div>
        )
    } else {
        return <div>Nie ma ogłoszeń spełniajacych warunki wyszukiwania</div>
    }
}


export default SearchResults;


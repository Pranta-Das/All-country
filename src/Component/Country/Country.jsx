
import {  useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry}) => {
    console.log(country);
    const {name, flags, population, cca3}= country;

    const [visited, setVisited] = useState(false);

    const handleVisited = ()=> {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h1>NAme: {name.common}</h1>
            <img src={flags.png}></img>
            <p>Population: {population} </p>
            <p>Code: { cca3}</p>
            <button onClick={()=>handleVisitedCountry(country)}>make list</button>
            <button onClick={handleVisited}>{visited ? 'visited' : 'Not-visited'}</button>
            {visited ? 'I have visited' : 'i want to visit'}
        </div>
    );
};

export default Country;
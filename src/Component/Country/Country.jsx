
import './Country.css';
const Country = ({country}) => {
    console.log(country);
    const {name, flags, population}= country;
    return (
        <div className='country'>
            <h1>NAme: {name.common}</h1>
            <img src={flags.png}></img>
            <p>Population: {populationj} </p>
        </div>
    );
};

export default Country;
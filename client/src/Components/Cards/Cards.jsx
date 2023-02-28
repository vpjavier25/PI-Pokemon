import './Cards.css'
import Card from "../Card/Card"
import Pages from '../Pages/pages';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Cards({onClickCard}) {

    const pokemons = useSelector((state) => state.pokemonsShow);
    const searchError = useSelector((state) => state.errorSearchByName)

    const [currentPage, setCurrentPage] = useState(1);
    const CurrentElements = 12;

    const limitofPages = 10;
    const [minNumberOfPage, setMinNumberOfPage] = useState(1);
    const [maxNumberOfPage, setmaxNumberOfPage] = useState(10);

    const pages = [];
    for (let i = 1; i < pokemons.length / CurrentElements; i++) {
        pages.push(i);
    }

    const lastElementId = currentPage * CurrentElements;
    const firstElementd = lastElementId - CurrentElements;
    const ItemsPerPage = pokemons.slice(firstElementd, lastElementId);



    const clickHandler = (event) => {

        setCurrentPage(Number(event.target.id));

    }

    const nextHandler = () => {
        if (currentPage + 1 > pages[pages.length - 1]) {
            return null;
        } else {
            setCurrentPage(currentPage + 1);
        }

        if (currentPage + 1 === maxNumberOfPage + 1) {
            setMinNumberOfPage(maxNumberOfPage);
            setmaxNumberOfPage(maxNumberOfPage + limitofPages)
        }

    }

    const prevHandler = () => {

        if (currentPage - 1 < pages[0]) {
            return null;
        } else {
            setCurrentPage(currentPage - 1);
        }

        setCurrentPage(currentPage - 1);
        if (currentPage - 1 === minNumberOfPage - 1) {
            setmaxNumberOfPage(minNumberOfPage)
            setMinNumberOfPage(minNumberOfPage - limitofPages);
        }
    }

    const clickLoadPrev = () => {
        setmaxNumberOfPage(minNumberOfPage);
        setMinNumberOfPage(minNumberOfPage - limitofPages);

    }

    const clickLoadNext = () => {
        setMinNumberOfPage(maxNumberOfPage);
        setmaxNumberOfPage(maxNumberOfPage + limitofPages);


    }
    return (

        <div className='cards-pagination'>

            {pokemons.length > 13 ? <Pages
                currentPage={currentPage}
                pages={pages}
                clickHandler={clickHandler}
                nextHandler={nextHandler}
                prevHandler={prevHandler}
                minNumberOfPage={minNumberOfPage}
                maxNumberOfPage={maxNumberOfPage}
                clickLoadPrev={clickLoadPrev}
                clickLoadNext={clickLoadNext} /> : null}

            {searchError.length ? <div>{searchError[0].message}</div> : null}
           
            <div className='pokemon-cards'>
                {pokemons.length && pokemons.length > 12 ? ItemsPerPage.map((pokemon, index) => {
                    return (
                        <Card
                            key={index}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            types={pokemon.types}
                            onClickCard ={onClickCard} />
                    )
                }) : pokemons.map((pokemon, index) => {
                    return (
                        <Card
                            key={index}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            types={pokemon.types} 
                            onClickCard={onClickCard}/>
                    )
                })}
            </div>

            {pokemons.length > 13 ? <Pages
                currentPage={currentPage}
                pages={pages}
                clickHandler={clickHandler}
                nextHandler={nextHandler}
                prevHandler={prevHandler}
                minNumberOfPage={minNumberOfPage}
                maxNumberOfPage={maxNumberOfPage}
                clickLoadPrev={clickLoadPrev}
                clickLoadNext={clickLoadNext} /> : null}

        </div>

    )
}
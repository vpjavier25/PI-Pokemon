import './Cards.css'
import Card from "../Card/Card"
import Pages from '../Pages/pages';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Cards({ItemsPerPage, onClickCard, currentPage, pages, clickHandler, nextHandler, prevHandler, minNumberOfPage, maxNumberOfPage, clickLoadPrev, clickLoadNext}) {

    const pokemons = useSelector((state) => state.pokemonsShow);
    //me ayudo a que se renderizaran las cartas cuando aplico los filtros, sucedia que cargaba el componenete pages sin las cards y debia hacer click en pages para que renderizara las cards correspondientes
    
    //guarda el mensaje error contenido en el global state
    const searchError = useSelector((state) => state.errorSearchByName)

    
 

    
    return (

        <div className='cards-pagination'>

            {pokemons.length > 12 ? <Pages
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
                {ItemsPerPage.map((pokemon, index) => {
                    return (
                        <Card
                            key={index}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            types={pokemon.types}
                            onClickCard ={onClickCard} />
                    )
                })}
            </div>

            {pokemons.length > 12 ? <Pages
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
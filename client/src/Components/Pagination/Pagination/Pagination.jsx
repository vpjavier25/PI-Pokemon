import './Pagination.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Pages from "../Pages/pages";
import Cards from "../../Cards/Cards";
import Loading from '../../Loading/Loading';


export default function Pagination() {

    const pokemons = useSelector((state) => state.pokemonsShow);

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
        <>
           
            <div className='pagination'>
            <div className='pagesfromPagination'>
                    {pokemons.length > 13 ? <Pages
                        currentPage = {currentPage}
                        pages={pages}
                        clickHandler={clickHandler}
                        nextHandler={nextHandler}
                        prevHandler={prevHandler}
                        minNumberOfPage={minNumberOfPage}
                        maxNumberOfPage={maxNumberOfPage}
                        clickLoadPrev={clickLoadPrev}
                        clickLoadNext={clickLoadNext} /> : null}
                </div>
                <Cards pokemons={ItemsPerPage} />
                {!pokemons.length?<div className='loading'><Loading></Loading></div>:null}
                <div className='pagesfromPagination'>
                    {pokemons.length > 13 ? <Pages
                        currentPage = {currentPage}
                        pages={pages}
                        clickHandler={clickHandler}
                        nextHandler={nextHandler}
                        prevHandler={prevHandler}
                        minNumberOfPage={minNumberOfPage}
                        maxNumberOfPage={maxNumberOfPage}
                        clickLoadPrev={clickLoadPrev}
                        clickLoadNext={clickLoadNext} /> : null}
                </div>
                

            </div>


        </>
    )

}
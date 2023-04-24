import './HomePage.css'
import SearchBar from "../SearchBar/searchBar";
import FilterByType from "../FilterBryType/FilterbyTypeButton";
import FilterBySource from "../FilterBySource/filterBySource";
import Order from "../OrderBtn/OrderBtn";
import Loading from '../Loading/Loading';
import Cards from '../Cards/Cards';
import CardDetail from '../CardDetail/CardDetail';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

export default function HomePage() {

  const types = useSelector((state) => state.types)
  const [info, setInfo] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [visible, setVisible] = useState(false);

  const onClickCard = (event) => {
    fetch(`http://localhost:3001/pokemons/${event.target.id}`)
      .then(res => res.json())
      .then(res => setPokemon({
        pokemonInfo: res
      }))
      .catch(error => console.log(error.message))

    setVisible(!visible);
  }

  const onCloseCardDetail = (event) => {
    if (event.target.className === 'visible' || event.target.className === 'pokemon-card-detail-close') {
      setVisible(!visible);
      setPokemon({});
    } else {
      return;
    }
  }



  const pokemons = useSelector((state) => state.pokemonsShow);
  //me ayudo a que se renderizaran las cartas cuando aplico los filtros, sucedia que cargaba el componenete pages sin las cards y debia hacer click en pages para que renderizara las cards correspondientes
  
  //guarda el mensaje error contenido en el global state
  const searchError = useSelector((state) => state.errorSearchByName)

  // para el paginado se establece una estado que guarde la pagina actual
  const [currentPage, setCurrentPage] = useState(1);
  //seteamos el numero de objetos por pagina
  let CurrentElements;
  pokemons.length > 12 ? CurrentElements = 12 : CurrentElements = pokemons.length;

  //para la barra del paginado se setea el numero de paginas que se mostraran
  const limitofPages = 10;
  //se guada un estado para mostrar el numero minimo de la fila de paginas mostrarda
  const [minNumberOfPage, setMinNumberOfPage] = useState(1);
  const [maxNumberOfPage, setmaxNumberOfPage] = useState(10);

  //se deteminan el numero de paginas a renderizar
  const pages = [];
  for (let i = 1; i <= Math.ceil(pokemons.length / CurrentElements); i++) {
    pages.push(i);
  }

  //se calculan los elementos que se mostraran en cada pagina
  const lastElementId = currentPage * CurrentElements;
  const firstElementId = lastElementId - CurrentElements;
  const ItemsPerPage = pokemons.slice(firstElementId, lastElementId);

  //evento para cada boton de la fila de paginas mostrada, cambia la pagina actual a la seleccionada
  const clickHandler = (event) => {

    setCurrentPage(Number(event.target.id));

  }

  //evento para el boton next, cambia la pagina actual a la siguienete
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

  //manejador del evento de cargar la pagina previa
  const prevHandler = () => {

    if (currentPage - 1 < pages[0]) {
      return null;
    } else {
      setCurrentPage(currentPage - 1);
    }

    if (currentPage - 1 === minNumberOfPage - 1) {
      setmaxNumberOfPage(minNumberOfPage)
      setMinNumberOfPage(minNumberOfPage - limitofPages);
    }
  }

  //manejador para botn que carga la siguiente fila de paginas, el boton para este manejador se muestra cuando hay mas de el limite de paginas mostradas
  const clickLoadPrev = () => {
    setmaxNumberOfPage(minNumberOfPage);
    setMinNumberOfPage(minNumberOfPage - limitofPages);

  }

  const clickLoadNext = () => {
    setMinNumberOfPage(maxNumberOfPage);
    setmaxNumberOfPage(maxNumberOfPage + limitofPages);
  }

  useEffect(() => {
    setInfo(pokemons)
  }, [pokemons])


  return (
    <div className='home-page'>

      <div className='nav'>
        <Link to='/form' className='create-a-pokemon'>
          <span>Create your own pokemon</span>
        </Link>

        <FilterByType types={types} setPageOne={()=> setCurrentPage(1)}></FilterByType>

        <FilterBySource setPageOne={()=> setCurrentPage(1)}></FilterBySource>

        <Order setPageOne={()=> setCurrentPage(1)}></Order>

        <SearchBar ></SearchBar>
      </div>


      {!pokemons.length ? <div className='loading'><Loading></Loading></div> : null}

      <Cards
        onClickCard={onClickCard}
        currentPage={currentPage}
        pages={pages}
        clickHandler={clickHandler}
        nextHandler={nextHandler}
        prevHandler={prevHandler}
        minNumberOfPage={minNumberOfPage}
        maxNumberOfPage={maxNumberOfPage}
        clickLoadPrev={clickLoadPrev}
        clickLoadNext={clickLoadNext}
        ItemsPerPage={ItemsPerPage}
      ></Cards>

      {pokemon ? <div className={visible ? 'visible' : 'hidden'} onClick={onCloseCardDetail}>
        <CardDetail onCloseCardDetail={onCloseCardDetail} pokemon={pokemon}></CardDetail>
      </div> : null}


      <footer className='footer'>made by vpjavier25 - discord</footer>

    </div>
  )
}
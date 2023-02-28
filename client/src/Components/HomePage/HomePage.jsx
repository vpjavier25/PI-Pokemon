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
import { useState } from 'react';



export default function HomePage() {

  const types = useSelector((state) => state.types)
  const pokemons = useSelector((state) => state.allPokemons)
  const [pokemon, setPokemon] = useState({});
  const [visible, setVisible] = useState(false);

  const onClickCard = (event) =>{
    fetch(`http://localhost:3001/pokemons/${event.target.id}`)
    .then(res => res.json())
    .then(res => setPokemon({
        pokemonInfo: res
    }))
    .catch(error => console.log(error.message))

    setVisible(!visible);
  }

  const onCloseCardDetail = () =>{
    setVisible(!visible);
    setPokemon({});
  }



  return (
    <div className='home-page'>

      <div className='nav'>
        <Link to='/form' className='create-a-pokemon'>
          <span>Create your own pokemon</span>
        </Link>

        <FilterByType types={types}></FilterByType>

        <FilterBySource></FilterBySource>

        <Order></Order>

        <SearchBar></SearchBar>
      </div>


      {!pokemons.length ? <div className='loading'><Loading></Loading></div> : null}

      <Cards onClickCard={onClickCard}></Cards>

      {pokemon?<div className={visible? 'visible':'hidden'} onClick = {onCloseCardDetail}>
        <CardDetail onCloseCardDetail={onCloseCardDetail} pokemon={pokemon}></CardDetail>
      </div>:null}
      

      <footer className='footer'>made by vpjavier25 - discord</footer>

    </div>
  )
}
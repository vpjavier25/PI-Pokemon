import './CardDetail.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardDetail({pokemon, onCloseCardDetail}) {

    // const { id } = useParams()
    // const [pokemon, setPokemon] = useState({})

    // useEffect(() => {
       
    //     // async function resAxios() {
    //     //     let res = await axios(`http://localhost:3001/pokemons/${id}`);

    //     //     setPokemon({
    //     //         pokemonInfo: res.data
    //     //     })
    //     // }

    //     // resAxios();
    // }, [id])

    console.log(pokemon)

    return (
        <>
            <div className='pokemon-card-detail'>
                <div className="pokemon-card-detail-name">{pokemon?.pokemonInfo?.name}</div>
                <div className="pokemon-card-detail-attack">{pokemon?.pokemonInfo?.attack}</div>
                <span className='pokemon-card-detail-close' onClick={onCloseCardDetail}>X</span>


                <div className='pokemon-card-detail-frame'>
                    <img className='pokemon-detail-img' src={pokemon?.pokemonInfo?.image} alt={pokemon?.pokemonInfo?.name}></img>

                    <div className='pokemons-card-detail-info-container'>
                        <div className='pokemon-card-detail-tag-info'>id</div>
                        <div className='pokemon-card-detail-info'>{pokemon?.pokemonInfo?.id}</div>
                        <div className='pokemon-card-detail-tag-info'>hp </div>
                        <div className='pokemon-card-detail-info'>{pokemon?.pokemonInfo?.hp}</div>
                        <div className='pokemon-card-detail-tag-info'>defense</div>
                        <div className='pokemon-card-detail-info'>{pokemon?.pokemonInfo?.defense}</div>
                        {pokemon?.pokemonInfo?.speed? <div className='pokemon-card-detail-tag-info'>speed</div>: null}
                        {pokemon?.pokemonInfo?.speed? <div className='pokemon-card-detail-info'>{pokemon?.pokemonInfo?.speed}</div>:null }
                        {pokemon?.pokemonInfo?.height? <div className='pokemon-card-detail-tag-info'>height</div>: null}
                        {pokemon?.pokemonInfo?.height? <div className='pokemon-card-detail-info'>{pokemon?.pokemonInfo?.height}</div>: null}
                        {pokemon?.pokemonInfo?.weight ? <div className='pokemon-card-detail-tag-info'>weight</div>: null}
                        {pokemon?.pokemonInfo?.weight? <div className='pokemon-card-detail-info'>{pokemon?.pokemonInfo?.weight}</div>: null }
                    </div>
                        <div className='pokemon-card-detail-type-tag'>type</div>
                        {pokemon?.pokemonInfo?.types ? pokemon.pokemonInfo.types.map((type, index) => <div className={`pokemon-card-detail-types-item${index}`}>{type}</div>) : null}

                </div>
            </div>




        </>
    )
}
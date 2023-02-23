import './CardDetail.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardDetail() {

    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})

    console.log(id)

    useEffect(() => {
        fetch(`http://localhost:3001/pokemons/${id}`)
            .then(res => res.json())
            .then(res => setPokemon({
                pokemonInfo: res
            }))
            .catch(error => console.log(error.message))
        // async function resAxios() {
        //     let res = await axios(`http://localhost:3001/pokemons/${id}`);

        //     setPokemon({
        //         pokemonInfo: res.data
        //     })
        // }

        // resAxios();
    }, [id])

    console.log(pokemon)

    return (
        <>
            <div className='container-pokemonDetailCard'>
                <div className="pokemonDetailCard">

                    <img src={pokemon?.pokemonInfo?.image} alt={pokemon?.pokemonInfo?.name}></img>

                    <div className="pDetailCardContainer">
                        <p className="fromDetailCard">name: {pokemon?.pokemonInfo?.name}</p>
                        <p className="fromDetailCard">id: {pokemon?.pokemonInfo?.id}</p>
                        <p className="fromDetailCard">hp: {pokemon?.pokemonInfo?.hp}</p>
                        <p className="fromDetailCard">attack: {pokemon?.pokemonInfo?.attack}</p>
                        <p className="fromDetailCard">defense: {pokemon?.pokemonInfo?.defense}</p>
                        <p className="fromDetailCard">speed: {pokemon?.pokemonInfo?.speed}</p>
                        <p className="fromDetailCard">height: {pokemon?.pokemonInfo?.height}</p>
                        <p className="fromDetailCard">weight: {pokemon?.pokemonInfo?.weight}</p>
                        <p className="fromDetailCard">types: {pokemon?.pokemonInfo?.types.join(', ')}</p>
                    </div>

                </div>
            </div>



        </>
    )
}
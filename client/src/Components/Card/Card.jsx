import { Link } from "react-router-dom";
import './Card.css'

export default function Card({ id, name, image, types }) {

    return (
        <div className="pokemonCard">

            <Link to ={`/pokemons/${id}`} >
                <img src={image} alt={name}/>
            </Link>
            <div className="pCardContainer">
                <p className="fromCard">Name: {name}</p>
                <p className="fromCard">Type/s: {types.join(', ')}</p>
            </div>
           


        </div>
    )
}
import "./Card.css"
//import { Link } from "react-router-dom";
import './Card.css'

export default function Card({ id, name, image, types, onClickCard }) {

    return (
        <div className="pokemon-card">
            <div className="pokemon-card-name"><span>{name}</span></div>
            <div className="pokemon-card-frame">

                <div className="pokemon-card-img-container" >
                    <img id={id} className='pokemon-img' src={image} alt={name} onClick={onClickCard}/>
                </div>

                <div className="pokemon-card-types"><span>Type</span></div>
                {types.map((type, index) => <p className={`pokemon-card-types-item${index}`}>{type}</p>)}
            </div>
        </div>
    )
}
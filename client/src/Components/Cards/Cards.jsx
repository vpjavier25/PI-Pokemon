import './Cards.css'
import Card from "../Card/Card"

export default function Cards(props) {
    return (

            <div className='Cards'>
                {props.pokemons.map((pokemon, index) => {
                    return (
                        <Card
                            key={index}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            types={pokemon.types} />
                    )
                })}
            </div>

    )
}
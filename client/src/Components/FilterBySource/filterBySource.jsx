import "./FilterBySource.css";
import { useDispatch } from "react-redux";
import { filterbySource } from "../../redux/actions";

export default function FilterBySource({setPageOne}) {

    const dispatch = useDispatch();

    const selected = (event) => {
        console.log(event.target.id)
        setPageOne();
        dispatch(filterbySource(event.target.id))
        
    }

    return (
        <>
            
            <div className="dropdown-filter-by-source">
                <span>Filter pokemons by source</span>
                <div className="dropdown-filter-by-source-content">
                    <div className="item-filter-by-source" id="Api" onClick={selected}>Pokemons in Api</div>
                    <div className="item-filter-by-source" id="Db" onClick={selected}>Pokemons in Db</div>
                    <div className="item-filter-by-source" id="All" onClick={selected}>All pokemons</div>
                </div>

            </div>
        </>
    )
}
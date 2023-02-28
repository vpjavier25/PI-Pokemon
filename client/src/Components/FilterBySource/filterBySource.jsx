import "./FilterBySource.css";
import { useDispatch } from "react-redux";
import { filterbySource } from "../../redux/actions";

export default function FilterBySource() {

    const dispatch = useDispatch();

    const selected = (event) => {
        console.log(event.target.id)
        dispatch(filterbySource(event.target.id))
    }

    return (
        <>
            {/* <div>
                <label htmlFor="SelectBySource">By source: </label>
                <select id="SelectBySource" name="SelectBySource" defaultValue="select" onChange={ChangeSource}>
                    <option value="select">--select a tag--</option>
                    <option value="Api">Api</option>
                    <option value="Db">Data base</option>
                    <option value="All">From all Sources</option>
                </select>
            </div> */}

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
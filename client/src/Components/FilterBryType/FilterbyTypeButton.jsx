import "./FilterByTypeButton.css";
import { useDispatch } from "react-redux";
import { filterbyType } from "../../redux/actions";

export default function FilterByType({ types }) {

    const dispatch = useDispatch();

    const selectHandler = (event) => {
        console.log(event);

        dispatch(filterbyType(event.target.id))

    }

    return (
        <>
            {/* <div>
                <label htmlFor="types">By types: </label>
                <select  id='types' name='types' onChange={selectHandler} defaultValue={'select'} >
                    <option value='select'>--select a tag--</option>

                    {types.map((type) => {
                        return <option className="option" value={type.name}>{type.name}</option>
                    })}

                    <option value='allPokemons'>all Pokemons</option>
                </select>
            </div> */}
            <div className="dropdown-filter-by-type">
                <span className="dropdown-filter-by-type-text">Filter by type</span>
                <div className="dropdown-filter-by-type-content">
                    {types.map((type) => {
                    return <div className="item-filter-by-type"  id={type.name} onClick={selectHandler}>{type.name}</div>
                })}
                </div>
            </div>


        </>
    )
}
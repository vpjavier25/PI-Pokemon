import "./FilterByTypeButton.css";
import { useDispatch } from "react-redux";
import { filterbyType } from "../../redux/actions";

export default function FilterByType({ types, setPageOne }) {

    const dispatch = useDispatch();

    const selectHandler = (event) => {
        console.log(event);

        setPageOne();

        dispatch(filterbyType(event.target.id))

        

    }

    return (
        <>
            <div className="dropdown-filter-by-type">
                <span className="dropdown-filter-by-type-text">Filter by type</span>
                <div className="dropdown-filter-by-type-content">
                    {types.map((type) => {
                    return <div className="item-filter-by-type"  id={type.name} onClick={selectHandler}>{type.name}</div>
                })}
                    <div className="item-filter-by-type" id='allPokemons' onClick={selectHandler}>All pokemons</div>
                </div>
            </div>


        </>
    )
}
import { useDispatch } from "react-redux";
import { filterbyType } from "../redux/actions";

export default function FilterByType({ types }) {

    const dispatch = useDispatch();

    const selectHandler = (event) => {

        dispatch(filterbyType(event.target.value))

    }

    return (
        <>
            <div>
                <label htmlFor="types">By types: </label>
                <select id='types' name='types' onChange={selectHandler} defaultValue={'select'} >
                    <option value='select'>--select a tag--</option>

                    {types.map((type) => {
                        return <option value={type.name}>{type.name}</option>
                    })}

                    <option value='allPokemons'>all Pokemons</option>
                </select>
            </div>


            {/* <label >
                {types?.map((type, index) => {
                    return (
                        <>
                            <span key = {index}>{type?.name}</span>
                            <label htmlFor={type?.name}>
                                <input type={"checkbox"} value={type?.name} name='types' checked={checked.includes(type?.name)} onChange={selectHandler}/>
                            </label>
                        </>


                    )
                })}
            </label>
            <button onClick={clickHandlerClear}>clear</button> */}


        </>
    )
}
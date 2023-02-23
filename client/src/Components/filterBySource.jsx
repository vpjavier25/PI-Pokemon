import { useDispatch } from "react-redux";
import { filterbySource } from "../redux/actions";

export default function FilterBySource() {

    const dispatch = useDispatch();

    const ChangeSource = (event) => {
        dispatch(filterbySource(event.target.value))
    }

    return (
        <>
            <div>
                <label htmlFor="SelectBySource">By source: </label>
                <select id="SelectBySource" name="SelectBySource" defaultValue="select" onChange={ChangeSource}>
                    <option value="select">--select a tag--</option>
                    <option value="Api">Api</option>
                    <option value="Db">Data base</option>
                    <option value="All">From all Sources</option>
                </select>
            </div>

        </>
    )
}
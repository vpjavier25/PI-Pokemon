import { useDispatch } from "react-redux"
import { order } from "../redux/actions";

export default function Order() {
    const dispatch = useDispatch();

    const ChangeOrder = (event) => {
        dispatch(order(event.target.value));
    }

    return (
        <>
            <div>
                <label htmlFor="Order">Order by: </label>
                <select id='Order' name='Order' defaultValue="select" onChange={ChangeOrder}>
                    <option value="select">--select a tag--</option>
                    <option value="AlphAsc">Alphabetic order</option>
                    <option value="AlphDesc">reverse Alphabetic order</option>
                    <option value="AscAtt">Ascending attack</option>
                    <option value="DesAtt">Descending attack</option>
                </select>
            </div>

        </>
    )
}
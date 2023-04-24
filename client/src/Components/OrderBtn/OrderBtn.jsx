import "./OrderBtn.css";
import { useDispatch } from "react-redux"
import { order } from "../../redux/actions";

export default function Order({setPageOne}) {
    const dispatch = useDispatch();

    const changeOrder = (event) => {
        setPageOne();
        dispatch(order(event.target.id));
    }

    return (
        <>
            {/* <div>
                <label htmlFor="Order">Order by: </label>
                <select id='Order' name='Order' defaultValue="select" onChange={ChangeOrder}>
                    <option value="select">--select a tag--</option>
                    <option value="AlphAsc">Alphabetic order</option>
                    <option value="AlphDesc">reverse Alphabetic order</option>
                    <option value="AscAtt">Ascending attack</option>
                    <option value="DesAtt">Descending attack</option>
                </select>
            </div> */}
            <div className="dropdown-order">
                <span>Order the pokemons</span>
                <div className="dropdown-order-content">
                    <div className="item-order" id="AlphAsc" onClick={changeOrder}>Alphabetic order</div>
                    <div className="item-order" id="AlphDesc" onClick={changeOrder}>reverse Alphabetic order</div>
                    <div className="item-order" id="AscAtt" onClick={changeOrder}>Ascending attack</div>
                    <div className="item-order" id="DesAtt" onClick={changeOrder}>Descending attack</div>
                    <div className="item-order" id="All" onClick={changeOrder}>Default order</div>

                </div>

            </div>
        </>
    )
}
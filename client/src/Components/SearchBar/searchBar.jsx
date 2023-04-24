import "./searchBar.css";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { SearchByName } from "../../redux/actions";
import { closeSeacrh } from "../../redux/actions";


export default function SearchBar() {

    const dispatch = useDispatch();

    const [input, setInput] = useState({});
    const [search, setSearch] = useState('');

    const onChangeHandler = (event) => {
        setInput({
            name: event.target.value
        });
    }

    const onClickHandlerSearch = (name) => {
        if (name) {
            dispatch(SearchByName(name));
            
        } else {
            alert('Ingresa un nombre')
        }
        setSearch(name);
    }

    const onClickHandlerCloseSearch = () => {
        dispatch(closeSeacrh());
        setSearch('');
    }


    return (
        <>
            <div className="search-bar">
                <input type='search' onChange={onChangeHandler} placeholder='search a pokemon'></input>
                <button type='button' onClick={() => onClickHandlerSearch(input.name)}>search</button>
                {search ? <div className="close-search">{search}<span onClick={onClickHandlerCloseSearch}>x</span></div> : null}
            </div>

        </>



    )
}